import {Store} from 'reactive-flux'
import keyMirror from 'keymirror'
import {updateTextField} from './actions'

let {localStoreage} = window;

const keys = keyMirror({
  TEXT_INPUT_VALUE: null
});

class mainStore extends Store {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.observe(updateTextField, this.onUpdateTextField);
  }

  onUpdateTextField(value) {
    localStorage.setItem(keys.TEXT_INPUT_VALUE, value);
  }

  getState () {
    return {
      textInputValue: localStorage.getItem(keys.TEXT_INPUT_VALUE)
    };
  }
}

export default new mainStore();