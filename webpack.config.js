var webpack = require("webpack");
module.exports = {
  context: __dirname,
  entry: [
    './client/router' // Your appʼs entry point
  ],
  output: {
    path: __dirname + "/client/dist",
    publicPath: '/dist/',
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
};