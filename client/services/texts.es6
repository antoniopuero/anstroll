let localTexts = {};
let extend = require('extend');

export function setTexts (texts) {
  extend(localTexts, texts);
}

export function getText (key) {
  return localTexts[key] ? localTexts[key] : '$ empty text $'
}