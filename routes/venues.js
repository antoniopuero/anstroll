let express = require('express');
let router = express.Router();
let forsquare = require('../services/forsquare-service');

/* GET users listing. */
router.get('/', function (req, res) {
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
