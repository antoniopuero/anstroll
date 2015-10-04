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
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        loader: 'less!css'
      }
    ]
  }
};