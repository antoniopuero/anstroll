var express = require('express');
var router = express.Router();
var forsquare = require('../services/forsquare-service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var long = req.query.long, lat = req.query.lat;
  forsquare.explore(long + ',' + lat).then(function (data) {
    res.render('venues', {data: JSON.stringify(data)});
  });
});


module.exports = router;
