var i18n = require("i18n");
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

module.exports = i18n;