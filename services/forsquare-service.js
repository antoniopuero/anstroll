var fetch = require('node-fetch');
var querystring = require('querystring');
var _ = require('lodash');
var moment = require('moment');


var baseUrl = 'https://api.foursquare.com/v2/';

var defaults = {
  client_id: '4TZAU5QZZIZBC4OPM13CSX2ORXJ2UURGBTEAO2YE5FOGCUVK',
  client_secret: 'R5NAXLI0V3IVCCLLH3JSZUVIH5IIMHKBGPJJRHKWK3FDFMYW',
  v: moment().format('YYYYMMDD')
};

module.exports = {
  explore: function (ll) {
    return fetch(baseUrl + 'venues/explore?' + querystring.stringify(_.extend({}, defaults, {ll: ll})), {
      method: 'GET'
    }).then(function (response) {
      return response.json();
    });
  }
};