module.exports = {
  context: __dirname,
  entry: "./public/router",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  devtool: 'source-map',
  debug: true,
  resolve: {
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