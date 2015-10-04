var express = require('express');
var router = express.Router();
var forsquare = require('../services/forsquare-service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  forsquare.explore(function (err, data) {
    res.render('venues', {data: JSON.stringify(data)});
  });
});

module.exports = router;
