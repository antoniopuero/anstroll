import express from 'express'
let router = express.Router();

router.get('/', (req, res) => {
  var locale = req.getLocale();
  var localesFileLocation = '../locales/' + locale + '.json';
  res.json(require(localesFileLocation));
});


export default router;
