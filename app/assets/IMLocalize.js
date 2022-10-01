import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

import en from './locales/en';
import zh from './locales/zh';

const translations = {en: en, zh: zh};


const i18n = new I18n(translations);

let locale = Localization.locale;

i18n.locale = locale;
i18n.enableFallback = true;

const t = i18n.t.bind(i18n);

export {i18n, t};