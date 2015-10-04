var nodeForsquare = require('node-foursquare-venues')('4TZAU5QZZIZBC4OPM13CSX2ORXJ2UURGBTEAO2YE5FOGCUVK', 'R5NAXLI0V3IVCCLLH3JSZUVIH5IIMHKBGPJJRHKWK3FDFMYW');

module.exports = {
  explore: function (cb) {
    return nodeForsquare.venues.explore({ll: '44.3,37.2'}, cb);
  }
}