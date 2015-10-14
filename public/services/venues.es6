let {ajax} = require('jquery');

module.exports = {
  getClosest: function (ll) {
    return ajax({
      url: '/venues/data',
      data: {
        ll: ll,
        radius: 3000
      }
    })
  }
};