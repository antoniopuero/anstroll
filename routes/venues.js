let express = require('express');
let router = express.Router();
let forsquare = require('../services/forsquare-service');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('venues');
});

router.get('/data', (req, res, next) => {
  var ll = req.query.ll;

  if (!ll) {
    res.status(500).send({error: 'Lat and long should be provided'});
  } else {
    forsquare.explore(req.query).then((data) => {
      res.json(data);
    });
  }
});


module.exports = router;
