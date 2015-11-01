var webpack = require('webpack');
var sharedConfig = require('./webpack.shared.config');
var extend = require('extend');
module.exports = extend({}, sharedConfig, {
  devtool: 'source-map',
  debug: true,
  module: {
    loaders: [
      {
        test: /\.es6$/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});