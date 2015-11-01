module.exports = {
  context: __dirname,
  entry: [
    './client/router'
  ],
  output: {
    path: __dirname + "/client/dist",
    publicPath: '/dist/',
    filename: "[name].bundle.js"
  },
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
  }
};