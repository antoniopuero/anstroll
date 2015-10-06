navigator.geolocation.getCurrentPosition(function(position) {
  if (!/&lat/.test(location.href)) {
    location.href = location.href + '?long=' + position.coords.longitude.toPrecision(2) + '&lat=' + position.coords.latitude.toPrecision(2);
  }
});

require('./app.less')