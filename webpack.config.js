var webpack = require("webpack");
module.exports = {
  context: __dirname,
  entry: {
    'starter-point': './client/entries/starter-point/starter-point',
    'map-page': './client/entries/map-page/map-page',
    vendor: ['react', 'ramda', 'react-dom']
  },
  output: {
    path: __dirname + "/client/dist",
    filename: "[name].bundle.js"
  },
  devtool: 'source-map',
  debug: true,
  resolve: {
    alias: {
      services: __dirname + '/client/services'
    },
    extensions: ["", ".webpack.js", ".web.js", ".js", ".es6"],
    root: __dirname
  },
  module: {
    loaders: [
      {
        test: /\.es6$/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
};