import nlp from "compromise";
import pluginParagraphs from "compromise-paragraphs";
import { enSectionSeparator } from "./i18n/en/section_en";
import { itSectionSeparator } from "./i18n/it/section_it";
import { langs } from "./i18n/lang";

const nplExtend = nlp.extend(pluginParagraphs);

let sectionTextOpts = {
  trim: true, // remove leading/trailing whitespace
  whitespace: true, // tabs, double-spaces
  unicode: true, // ü → u
  lowercase: false, // co-erce everything to lowercase
  titlecase: true, // titlecase proper-nouns, acronyms, sentence-starts
  punctuation: true, // '?!' → ?
  acronyms: false, // F.B.I. → FBI
  abbreviations: false, // Mrs. → Mrs
  implicit: false, // didn't → 'did not'
};

const sectionSeparationWord = new Map();
sectionSeparationWord.set(langs.ENGLISH, enSectionSeparator);
sectionSeparationWord.set(langs.ITALIAN, itSectionSeparator);

export function splitIngredients(ingredientsText: string): string[] {
  const ingredientSection = nplExtend(ingredientsText);

  return ingredientSection.out("array");
}

export function splitDirections(directionsText: string): string[] {
  // Search directions section
  const directionsSection = nplExtend(directionsText);

  const directions: string[] = [];
  // Split directions in subsections
  const subSection = directionsSection.paragraphs();
  subSection.forEach((p: { text: () => any; sentences: () => any[] }) => {
    p.sentences().forEach((s) => {
      if (s.wordCount() > 4) {
        directions.push(s.text());
      } else {
        directions.push("(+)" + s.text());
      }
    });
  });
  return directions;
}

export function splitRecipe(
  recipe: string,
  language: string
): { ingredients: string[]; directions: string[] } {
  let words = sectionSeparationWord.get(language);
  var doc = nplExtend(recipe);

  const lookupSectionSeparator = doc.lookup(words).text();
  var sections = recipe.split(lookupSectionSeparator);

  return {
    ingredients: splitIngredients(sections[0]),
    directions: splitDirections(sections[1]),
  };
}
