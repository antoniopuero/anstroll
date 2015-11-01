var express = require('express');
var router = express.Router();
var version = require('../../package.json').version;

router.get('/', function (req, res) {
  res.render('index', {version: version, greetings: res.__('greetings')});
});


router.get('/map', function (req, res) {
  res.render('map-page', {version: version});
});


module.exports = router;
