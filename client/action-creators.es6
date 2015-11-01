import * as actions from './actions'

export function updateInputValueAction (name, value) {
  return {
    type: actions.UPDATE_INPUT_VALUE,
    name,
    value
  }
}
export function updateTexts (getText) {
  return (dispatch) => {
    getText().then((res) => {
      dispatch({
        type: actions.UPDATE_TEXTS,
        texts: res.body
      });
    })
  };
}
export function updateCoords (coords) {
  return {
    type: actions.UPDATE_COORDINATES,
    coords
  };
}