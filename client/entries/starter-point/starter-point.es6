import venues from 'services/venues'
import R from 'ramda'
import React from 'react'
import ReactDOM from 'react-dom'

import './starter-point.less'

let _ = R.__;
let trace = R.curry((tag, x) => {
  console.log(tag, x);
  return x;
});

let getCoords = R.compose(R.join(',') , R.map(coord => coord.toPrecision(4)), R.values, R.pickAll(['latitude', 'longitude']), R.prop('coords'));

let getClosestVenues = R.compose(R.curry(venues.getClosest), getCoords);

class App extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {


    navigator.geolocation.getCurrentPosition(function(position) {

      getClosestVenues(position).then(function (data) {
        console.log(data);
      })

    });

    return <div>Starter point</div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('main'));

export default App;