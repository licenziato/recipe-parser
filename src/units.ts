export const engUnits = {
  cup: ['c', 'c.', 'C', 'Cups','cups'],
  gallon: ['gal'],
  ounce: ['oz', 'oz.'],
  pint: ['pt', 'pts', 'pt.'],
  pound: ['lb', 'lb.', 'lbs', 'lbs.', 'Lb', 'Lbs'],
  quart: ['qt', 'qt.', 'qts', 'qts.'],
  tablespoon: ['tbs', 'tbsp', 'tbspn', 'T', 'T.', 'Tablespoons', 'Tablespoon', 'tablespoons'],
  teaspoon: ['tsp', 'tspn', 't', 't.', 'teaspoons'],
  gram: ['g', 'g.'],
  kilogram: ['kg', 'kg.', 'Kg', 'Kg.'],
  liter: ['l', 'l.', 'lt', 'Lt', 'LT', 'L', 'L.'],
  milligram: ['mg', 'mg.'],
  milliliter: ['ml', 'ml.', 'mL', 'mL.'],
  package: ['pkg', 'pkgs'],
  stick: ['sticks'],
  piece: ['pcs', 'pcs.'],
  pinch: ['pinch'],
  small: ['Small'],
  medium: ['Medium'],
  large: ['large', 'Large'],
} as { [key: string]: string[] };

export const engPluralUnits = {
  cup: 'cups',
  gallon: 'gallons',
  ounce: 'ounces',
  pint: 'pints',
  pound: 'pounds',
  quart: 'quarts',
  tablespoon: 'tablespoons',
  teaspoon: 'teaspoons',
  gram: 'grams',
  kilogram: 'kilograms',
  liter: 'liters',
  milligram: 'milligrams',
  milliliter: 'milliliters',
  clove: 'cloves',
  bag: 'bags',
  box: 'boxes',
  pinch: 'pinches',
  can: 'cans',
  slice: 'slices',
  piece: 'pieces'
} as { [key: string]: string };

export const engPreposition = ['of'];


export const itaUnits = {
  cup: ['Tazza', 'tazzina', 'Tazzina', 'tazzine', 'tazze'],
  quart: ['quarto'],
  tablespoon: ['Cucchiaio', 'Cucchiai'],
  teaspoon: ['Cucchiaino', 'Cucchiaini','cucchiaini'],
  gram: ['g', 'g.', 'gr','Grammo', 'grammi', 'Grammi'],
  kilogram: ['kg', 'kg.', 'KG','Kg', 'Kg.', 'Chilogrammo', 'chilogrammi', 'Chilogrammi','kilogrammo', 'Kilogrammo'],
  liter: ['l', 'l.', 'L', 'L.', 'lt','Litro', 'litri'],
  milligram: ['mg', 'mg.', 'Milligrammo','milligrammi'],
  milliliter: ['ml', 'ml.', 'mL', 'mL.', 'Millilitro','millilitri'],
  can: ['lattine'],
  box: ['scatola'],
  clove: ['spicchio'],
  slice: ['fetta'],
  bag: ['bustine'],
  package: ['pkg', 'pkgs', 'pacchetto','Pacchetto','Pacco', 'pacchi'],
  piece: ['pcs', 'pcs.','pezzi'],
  pinch: ['Pizzico', 'pizzichi'],
  panetto: ['Panetto', 'panetti'],
  foglia: ['Foglia','foglie'],
  mazzetto: ['Mazzetto','mazzetti'],
  vasetto: ['Vasetto', 'vasetti']
} as { [key: string]: string[] };

export const itaPluralUnits = {
  cup: 'tazze',
  quart: 'quarti',
  tablespoon: 'cucchiai',
  teaspoon: 'cucchiaini',
  gram: 'grammi',
  kilogram: 'chilogrammo',
  liter: 'litri',
  milligram: 'milligrammi',
  milliliter: 'millilitri',
  clove: 'spicchi',
  box: 'scatole',
  pinch: 'pizzichi',
  can: 'lattine',
  slice: 'fette',
  piece: 'pezzi',
  bag: 'bustine',
  panetto: 'panetti',
  foglia: 'foglie',
  mazzetto: 'mazzetti',
  vasetto: 'vasetto'
} as { [key: string]: string };

export const itaPreposition = ['di','d\''];

export const  unitsMap = new Map();
unitsMap.set("eng",[engUnits,  engPluralUnits, engPreposition]);
unitsMap.set("ita",[itaUnits,  itaPluralUnits, itaPreposition]);

