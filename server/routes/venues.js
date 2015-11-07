import express from 'express'
var router = express.Router();
import venuesController from '../controllers/venues';

router.get('/', venuesController.getClosestVenues);


export default router;
