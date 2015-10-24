import venues from 'services/venues'
import R from 'ramda'
import Component from '../react-component'
import React from 'react'
import ReactDOM from 'react-dom'
import {TextField} from 'material-ui'
import {updateTextField} from '../actions'
import mainStore from '../store'

import './starter-point.less'

let _ = R.__;
let trace = R.curry((tag, x) => {
  console.log(tag, x);
  return x;
});

let getCoords = R.compose(R.join(',') , R.map(coord => coord.toPrecision(4)), R.values, R.pickAll(['latitude', 'longitude']), R.prop('coords'));

let getClosestVenues = R.compose(R.curry(venues.getClosest), getCoords);

class App extends Component {

  constructor (props) {
    super(props);
    this.state = mainStore.getState();
  }

  componentWillMount () {

    navigator.geolocation.getCurrentPosition(function(position) {

      getClosestVenues(position).then(function (data) {
        console.log(data);
      })

    });
  }

  _handleFloatingInputChange (e) {
    updateTextField(e.target.value);
  }

  render () {

    return <div>

      <TextField
        hintText="Hint Text"
        floatingLabelText="Floating Label Text"
        value={this.state.textInputValue}
        onChange={this._handleFloatingInputChange} />
    </div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('main'));

export default App;