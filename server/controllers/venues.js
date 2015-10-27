var forsquare = require('../services/forsquare-service');

var Venues = {
  getClosestVenues: function (req, res) {
    var ll = req.query.ll;

    if (!ll) {
      res.status(500).send({error: 'Lat and long should be provided'});
    } else {
      forsquare.explore(req.query).then(function (data) {
        res.json(data);
      });
    }
  }
};

module.exports = Venues;