
import venues from './services/venues'
import R from 'ramda'
import React from 'react'

import './app.less'

let _ = R.__;
let trace = R.curry((tag, x) => {
  console.log(tag, x);
  return x;
});

let getCoords = R.compose(R.join(',') , R.values, R.pickAll(['latitude', 'longitude']), R.prop('coords'));

class App extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {


    navigator.geolocation.getCurrentPosition(function(position) {

      venues.getClosest(getCoords(position)).then(function (data) {
        console.log(data);
      })

    });

    return <div>hi</div>;
  }
}

export default App;