import forsquare from '../services/forsquare-service'

export default {
  getClosestVenues: (req, res) => {
    var ll = req.query.ll;

    if (!ll) {
      res.status(500).send({error: 'Lat and long should be provided'});
    } else {
      forsquare.explore(req.query).then((data) => {
        res.json(data);
      });
    }
  }
};