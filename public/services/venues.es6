import {ajax} from 'jquery';

export default {
  getClosest: function (ll) {
    return ajax({
      url: '/venues/data',
      data: {
        ll: ll,
        radius: 300
      }
    })
  }
};