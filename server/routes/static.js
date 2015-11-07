import express from 'express'
let router = express.Router();
import {version} from '../../package.json';

router.get('/', (req, res) => {

  res.render('index', {version, greetings: res.__('greetings')});
});


router.get('/map', (req, res) => {
  res.render('map-page', {version});
});


export default router;
