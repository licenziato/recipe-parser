// ref: https://github.com/Charlie85270/recipes-parser/blob/master/nlp/en/global_unit.json
// ref: https://github.com/mealprime/recipe-ingredient-parser

export const enUnits = {
  cup: ['coupes', 'coupe', 'cp.', 'cp', 'cups', 'cps', 'cps.', 'cup', 'c.', 'c'],
  glass: ['glass', 'glas', 'gls'],
  gallon: ['gal', 'gallons', 'gallon', 'gal.'],
  ounce: ['onces', 'once', 'oz.', 'oz', 'oc.', 'oc', 'ounces', 'ounce'],
  pint: ['pt', 'pts', 'pt.', 'pintes', 'pinte', 'pints', 'pint'],
  pound: ['lb', 'lb.', 'lbs', 'lbs.', 'Lb', 'Lbs', 'pounds', 'pound'],
  quart: ['qt', 'qt.', 'qts', 'qts.', 'quarts', 'quart'],
  tablespoon: ['tbs', 'tbs.', 'tbsp', 'tbspn', 'tbl', 'tbl.', 'spoon', 'tbsp.', 'T', 'T.', 'Tablespoons', 'Tablespoon', 'tablespoons'],
  teaspoon: ['tsp', 'tsp.', 'tspn', 't', 't.', 'teaspoons'],
  gram: ['g', 'g.', 'grams', 'gram'],
  kilogram: ['kg', 'kg.', 'Kg', 'Kg.', 'kilos', 'kilo', 'kilograms', 'kilogram'],
  milligram: ['mg', 'mg.', 'milligrams', 'milligram', 'mlg.', 'mlg'],
  liter: ['l', 'l.', 'lt', 'Lt', 'LT', 'L', 'L.', 'liters', 'liter'],
  centiliter: ['cl', 'cl.', 'centiliter', 'centiliters'],
  milliliter: ['ml', 'ml.', 'mL', 'mL.', 'milliliters', 'milliliter', 'millilitre', 'mlt'],
  zest: ['mordant', 'elan', 'zest', 'zst'],
  handful: ['handfuls', 'handful', 'hdful', 'hdfl', 'hdf'],
  pinch: ['pinch', 'pinches', 'pinche', 'pch'],
  slice: ['tranches', 'tranche', 'slices', 'slice'],
  package: ['pkg', 'pkgs', 'packets', 'packet', 'pck', 'box', 'boxes'],
  stick: ['sticks'],
  piece: ['pcs', 'pcs.'],
  sheet: ['sheets', 'sheet'],
  clove: ['clove', 'cloves'],
  bag: ['bag','bags'],
  can: ['can','cans'],
  small: ['Small'],
  medium: ['Medium'],
  large: ['Large'],
} as { [key: string]: string[] };

export const enPluralUnits = {
  cup: 'cups',
  glass: 'glasses',
  gallon: 'gallons',
  ounce: 'ounces',
  pint: 'pints',
  pound: 'pounds',
  quart: 'quarts',
  tablespoon: 'tablespoons',
  teaspoon: 'teaspoons',
  gram: 'grams',
  kilogram: 'kilograms',
  milligram: 'milligrams',
  liter: 'liters',
  centiliter: 'centiliters',
  milliliter: 'milliliters',
  zest: 'zestes',
  handful: 'handfuls',
  pinch: 'pinches',
  slice: 'slices',
  package: 'packages',
  stick: 'sticks',
  piece: 'pieces',
  sheet: 'sheets',
  clove: 'cloves',
  bag: 'bags',
  can: 'cans',
  small: 'smalls',
  medium: 'mediums',
  large: 'larges'
} as { [key: string]: string };

export const enPreposition = ['of'];