import { parseList, LANG } from './src/index';
//import { units } from "./units";


//console.log(units);

const test_ita = [
    '1 cucchiaio basilico',
    '300 g di farina',
    '5-6 uova (~300 g)',
    '100 g burro',
    '15 g di zucchero',
    '5 g sale',
    '20 g sale',
    'dieci g lievito madre o birra',
    '100 ml di caffé'
]

const test_en = [
    '1 Tablespoon of basil',
    '300 oz of flour',
    '5-6 eggs (~300 g)',
    '100 gr butter',
    '15 g of sugar',
    '1/2 g salt',
    '20 g salt',
    'ten gr yeast',
    '100 ml di café'
]

const res_it = parseList(test_ita, LANG.ITALIAN, false);
const res_en = parseList(test_en, LANG.ENGLISH, false);

console.log(res_it);
console.log(res_en);

//console.log(combine([parse('10 gram sale', 'eng'), parse('20 grammi sale', 'ita')]));
//console.log(parse('dieci g lievito madre o birra', langs.ITALIAN));