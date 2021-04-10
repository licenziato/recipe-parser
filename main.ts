import { parse, parseList, combine } from './src/index';
//import { units } from "./units";


//console.log(units);
/*
console.log(parse('1 Tablespoon of basil', 'eng'));
console.log(parse('1 cucchiaio basilico', 'eng'));

console.log(parse('300 g di farina', 'eng'));
console.log(parse('5 uova (~300 g)', 'eng'));
console.log(parse('100 g  burro', 'eng'));
console.log(parse('15 g di zucchero', 'ita'));
console.log(parse('5 g sale', 'eng'));
*/
console.log(combine([parse('10 gram sale', 'eng'), parse('20 grammi sale', 'ita')]));
console.log(parse('dieci g lievito madre o birra', 'ita'));

console.log(
    parseList([
        '1 Tablespoon of basil',
        '1 cucchiaio basilico',
        '300 g di farina',
        '5-6 uova (~300 g)',
        '100 g  burro',
        '15 g di zucchero',
        '5 g sale',
        '20 g sale',
        'dieci g lievito madre o birra'
    ], 'ita', true));


console.log(combine(parseList([
    '1 cucchiaio basilico',
    '300 g di farina',
    '100 g  burro',
    '15 g di zucchero',
    'cinque g burro',
    'dieci g lievito madre o birra'
], 'ita')));