import {Store} from 'reactive-flux'
import keyMirror from 'keymirror'
import {updateTextField, updateStartCoords} from './actions'
import R from 'ramda'

let {localStoreage} = window;

const keys = keyMirror({
  TEXT_INPUT_VALUE: null,
  START_COORDINATES: null
});

class mainStore extends Store {
  constructor () {
    super();
    this.init();
  }

  init () {
    this.observe(updateTextField, this.onUpdateTextField);
    this.observe(updateStartCoords, this.onUpdateStartCoords);
  }

  onUpdateTextField (value) {
    localStorage.setItem(keys.TEXT_INPUT_VALUE, value);
  }

  onUpdateStartCoords (value) {
    let getCoords = R.compose(R.join(',')
      , R.map(coord => coord.toPrecision(4))
      , R.values
      , R.pickAll(['latitude', 'longitude'])
      , R.prop('coords'));

    localStorage.setItem(keys.START_COORDINATES, getCoords(value));
  }

  getState () {
    return {
      textInputValue: localStorage.getItem(keys.TEXT_INPUT_VALUE),
      startCoords: localStorage.getItem(keys.START_COORDINATES)
    };
  }
}

export default new mainStore();