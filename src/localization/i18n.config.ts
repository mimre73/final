import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en, fr} from './languages';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;

// import i18n from 'i18next';
// import {initReactI18next} from 'react-i18next';

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     compatibilityJSON: 'v3', //To make it work for Android devices, add this line.
//     resources,
//     lng: 'en', // default language to use.
//     // if you're using a language detector, do not define the lng option
//     interpolation: {
//       escapeValue: false,
//     },
//   });
// export default i18n;
