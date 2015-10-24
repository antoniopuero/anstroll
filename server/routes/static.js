let express = require('express');
let router = express.Router();
let version = require('../../package.json').version;

router.get('/', function (req, res) {
  res.render('starter-point', {version: version});
});


module.exports = router;
