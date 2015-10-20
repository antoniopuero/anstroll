let express = require('express');
let router = express.Router();
let venuesController = require('../controllers/venues');

router.get('/', venuesController.getClosestVenues);


module.exports = router;
