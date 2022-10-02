import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

import en from './locales/en';
import twi from './locales/twi';

const translations = {en: en, twi: twi};


const i18n = new I18n(translations);

let locale = Localization.locale;

i18n.locale = locale;
i18n.enableFallback = true;

const t = i18n.t.bind(i18n);

const DiseaseInfo = {
    riskLevel: [1, 2, 3]
}

export {i18n, t, DiseaseInfo};