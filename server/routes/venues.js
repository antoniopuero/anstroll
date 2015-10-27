var express = require('express');
var router = express.Router();
var venuesController = require('../controllers/venues');

router.get('/', venuesController.getClosestVenues);


module.exports = router;
