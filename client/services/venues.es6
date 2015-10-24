import request from 'superagent';
import {stringify} from 'querystring'

export default {
  getClosest: function (ll) {
    return request.get(`/api/venues?${stringify({ll: ll, radius: 300})}`);
  }
};