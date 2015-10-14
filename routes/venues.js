var express = require('express');
var router = express.Router();
var forsquare = require('../services/forsquare-service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('venues');
});

router.get('/data', function (req, res, next) {
  var ll = req.query.ll;

  if (!ll) {
    res.status(500).send({error: 'Lat and long should be provided'});
  } else {
    forsquare.explore(req.query).then(function (data) {
      res.json(data);
    });
  }
});


module.exports = router;
