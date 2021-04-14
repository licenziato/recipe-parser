import { enMagnitude, enSmall, enTasteMap } from './i18n/en/numbers_en';
import { itMagnitude, itSmall, itTasteMap } from './i18n/it/numbers_it';
import { langs } from './i18n/lang';


export const toTasteMap = new Map();
toTasteMap.set(langs.ENGLISH, enTasteMap);
toTasteMap.set(langs.ITALIAN, itTasteMap);

export const numbersMap = new Map();
numbersMap.set(langs.ENGLISH, [enSmall, enMagnitude]);
numbersMap.set(langs.ITALIAN, [itSmall, itMagnitude]);

