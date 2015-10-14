module.exports = {
  context: __dirname + "/public",
  entry: "./app.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
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