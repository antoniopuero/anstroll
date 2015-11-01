import * as actions from './actions'

export function updateInputValueAction (name, value) {
  return {
    type: actions.UPDATE_INPUT_VALUE,
    name,
    value
  }
}
export function updateTexts (texts) {
  return {
    type: actions.UPDATE_TEXTS,
    texts
  };
}
export function updateCoords (coords) {
  return {
    type: actions.UPDATE_COORDINATES,
    coords
  };
}