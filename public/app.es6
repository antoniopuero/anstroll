
let venues = require('./services/venues');
let R = require('ramda');
let _ = R.__;
let trace = R.curry((tag, x) => {
  console.log(tag, x);
  return x;
});

let getCoords = R.compose(R.join(',') , R.values, R.pickAll(['latitude', 'longitude']), R.prop('coords'));

navigator.geolocation.getCurrentPosition(function(position) {

  venues.getClosest(getCoords(position)).then(function (data) {
    console.log(data);
  })


});

require('./app.less');