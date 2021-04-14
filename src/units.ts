import { enUnits, enPluralUnits, enPreposition } from './i18n/en/units_en';
import { itUnits, itPluralUnits, itPreposition } from './i18n/it/units_it';
import { langs } from './i18n/lang';

export const unitsMap = new Map();
unitsMap.set(langs.ENGLISH, [enUnits, enPluralUnits, enPreposition]);
unitsMap.set(langs.ITALIAN, [itUnits, itPluralUnits, itPreposition]);

