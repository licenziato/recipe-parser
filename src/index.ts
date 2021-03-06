import * as convert from "./convert";
import { unitsMap } from "./units";
import { repeatingFractions } from "./repeatingFractions";
import { langs as LANGUAGES } from "./i18n/lang";
import { splitDirections, splitIngredients, splitRecipe } from "./parser";

export const LANG = LANGUAGES;

export interface Recipe {
  ingredients: Ingredient[];
  directions: string[];
}

export interface Ingredient {
  ingredient: string;
  extraInfo: string | null;
  quantity: string | null;
  unit: string | null;
  minQty: string | null;
  maxQty: string | null;
}

function getUnit(input: string, language: string) {
  let unit = unitsMap.get(language);
  let units = unit[0];
  let pluralUnits = unit[1];
  if (units[input] || pluralUnits[input]) {
    return [input];
  }
  for (const unit of Object.keys(units)) {
    for (const shorthand of units[unit]) {
      if (input.toLowerCase() === shorthand.toLowerCase()) {
        return [unit, input];
      }
    }
  }
  for (const pluralUnit of Object.keys(pluralUnits)) {
    if (input.toLowerCase() === pluralUnits[pluralUnit]) {
      return [pluralUnit, input];
    }
  }
  return [];
}

/* return the proposition if it's used before of the name of
the ingredient */
function getPreposition(input: string, language: string) {
  let prepositionMap = unitsMap.get(language);
  let prepositions = prepositionMap[2];
  for (const preposition of prepositions) {
    let regex = new RegExp("^" + preposition);
    if (convert.getFirstMatch(input, regex)) return preposition;
  }

  return null;
}

export function parseList(
  recipeString: string[],
  language: string,
  toCombine = false
): Ingredient[] {
  const ret = recipeString.map((r) => parse(r, language));
  return toCombine ? combine(ret) : ret;
}

export function parse(recipeString: string, language: string): Ingredient {
  const ingredientLine = convert.removeAccentuation(recipeString.trim()); // removes leading and trailing whitespace

  /* restOfIngredient represents rest of ingredient line.
  For example: "1 pinch salt" --> quantity: 1, restOfIngredient: pinch salt */
  let [quantity, restOfIngredient] = convert.findQuantityAndConvertIfUnicode(
    ingredientLine,
    language
  ) as string[];

  quantity = convert.convertFromFraction(quantity);

  /* extraInfo will be any info in parantheses. We'll place it at the end of the ingredient.
  For example: "sugar (or other sweetener)" --> extraInfo: "(or other sweetener)" */
  let extraInfo = null;
  if (convert.getFirstMatch(restOfIngredient, /\(([^\)]+)\)/)) {
    extraInfo = convert.getFirstMatch(restOfIngredient, /\(([^\)]+)\)/);
    restOfIngredient = restOfIngredient.replace(extraInfo, "").trim();
  }

  // grab unit and turn it into non-plural version, for ex: "Tablespoons" OR "Tsbp." --> "tablespoon"
  let unit: string = '', originalUnit: string = '';

  for (let i = 0; i < restOfIngredient.split(" ").length; i++) {
    [unit, originalUnit] = getUnit(
      restOfIngredient.split(" ")[i],
      language
    ) as string[];
    if (!!unit) break;
  };

  // remove unit from the ingredient if one was found and trim leading and trailing whitespace
  let ingredient = !!originalUnit
    ? restOfIngredient.replace(originalUnit, "").trim()
    : restOfIngredient.replace(unit, "").trim();

  let preposition = getPreposition(ingredient.split(" ")[0], language);
  if (preposition) {
    let regex = new RegExp("^" + preposition);
    ingredient = ingredient.replace(regex, "").trim();
  }

  let minQty = quantity; // default to quantity
  let maxQty = quantity; // default to quantity

  // if quantity is non-nil and is a range, for ex: "1-2", we want to get minQty and maxQty
  if (quantity && quantity.includes("-")) {
    [minQty, maxQty] = quantity.split("-");
  }

  return {
    quantity,
    unit: !!unit ? unit : null,
    ingredient: ingredient,
    extraInfo: extraInfo,
    minQty,
    maxQty,
  };
}

export function combine(ingredientArray: Ingredient[]) {
  const combinedIngredients = ingredientArray.reduce((acc, ingredient) => {
    const key = ingredient.ingredient + ingredient.unit; // when combining different units, remove this from the key and just use the name
    const existingIngredient = acc[key];

    if (existingIngredient) {
      return Object.assign(acc, {
        [key]: combineTwoIngredients(existingIngredient, ingredient),
      });
    } else {
      return Object.assign(acc, { [key]: ingredient });
    }
  }, {} as { [key: string]: Ingredient });

  return Object.keys(combinedIngredients)
    .reduce((acc, key) => {
      const ingredient = combinedIngredients[key];
      return acc.concat(ingredient);
    }, [] as Ingredient[])
    .sort(compareIngredients);
}

export function prettyPrintingPress(ingredient: Ingredient) {
  let quantity = "";
  let unit = ingredient.unit;
  if (ingredient.quantity) {
    const [whole, remainder] = ingredient.quantity.split(".");
    if (+whole !== 0 && typeof whole !== "undefined") {
      quantity = whole;
    }
    if (+remainder !== 0 && typeof remainder !== "undefined") {
      let fractional;
      if (repeatingFractions[remainder]) {
        fractional = repeatingFractions[remainder];
      } else {
        const fraction = "0." + remainder;
        const len = fraction.length - 2;
        let denominator = Math.pow(10, len);
        let numerator = +fraction * denominator;

        const divisor = gcd(numerator, denominator);

        numerator /= divisor;
        denominator /= divisor;
        fractional = Math.floor(numerator) + "/" + Math.floor(denominator);
      }

      quantity += quantity ? " " + fractional : fractional;
    }
    /* if (((+whole !== 0 && typeof remainder !== 'undefined') || +whole > 1) && unit) {
      unit = nounInflector.pluralize(unit);
    }*/
  } else {
    return ingredient.ingredient;
  }

  return `${quantity}${unit ? " " + unit : ""} ${ingredient.ingredient}`;
}

function gcd(a: number, b: number): number {
  if (b < 0.0000001) {
    return a;
  }

  return gcd(b, Math.floor(a % b));
}

// TODO: Maybe change this to existingIngredients: Ingredient | Ingredient[]
function combineTwoIngredients(
  existingIngredients: Ingredient,
  ingredient: Ingredient
): Ingredient {
  const quantity =
    existingIngredients.quantity && ingredient.quantity
      ? (
          Number(existingIngredients.quantity) + Number(ingredient.quantity)
        ).toString()
      : null;
  const minQty =
    existingIngredients.minQty && ingredient.minQty
      ? (
          Number(existingIngredients.minQty) + Number(ingredient.minQty)
        ).toString()
      : null;
  const maxQty =
    existingIngredients.maxQty && ingredient.maxQty
      ? (
          Number(existingIngredients.maxQty) + Number(ingredient.maxQty)
        ).toString()
      : null;
  return Object.assign({}, existingIngredients, { quantity, minQty, maxQty });
}

function compareIngredients(a: Ingredient, b: Ingredient) {
  if (a.ingredient === b.ingredient) {
    return 0;
  }
  return a.ingredient < b.ingredient ? -1 : 1;
}

export function parseIngredients(
  ingredients: string,
  language: string
): Ingredient[] {
  return parseList(splitIngredients(ingredients), language, false);
}

export function parseDirections(directions: string): string[] {
  return splitDirections(directions);
}

export function parseRecipe(recipe: string, language: string): Recipe {
  const recipeTextSplit = splitRecipe(recipe, language);
  return {
    ingredients: parseList(recipeTextSplit.ingredients, language),
    directions: recipeTextSplit.directions
  }
}
