import {ajax} from 'jquery';

export default {
  getClosest: function (ll) {
    return ajax({
      url: '/api/venues',
      data: {
        ll: ll,
        radius: 300
      }
    })
  }
};