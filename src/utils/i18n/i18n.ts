import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enLang from './locales/en/en.json';
import ptBRLang from './locales/pt-BR/pt-BR.json';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enLang,
      },
      'pt-BR': {
        translation: ptBRLang,
      },
    },
    // lng: "pt-BR", // default language
    fallbackLng: 'en', // fallback language, in case default language doesn't work
    debug: true,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });