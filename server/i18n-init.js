import i18n from 'i18n'
i18n.configure({
  // setup some locales - other locales default to en silently
  locales: ['en', 'ua'],

  // you may alter a site wide default locale
  defaultLocale: 'en',

  // where to store json files - defaults to './locales' relative to modules directory
  directory: './server/locales',

  // enable object notation
  objectNotation: true
});

export default i18n;