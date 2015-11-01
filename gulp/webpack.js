var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require("../webpack.config.js");

module.exports = function (callback) {
  webpackConfig.entry.unshift('webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server');
  var compiler = webpack(webpackConfig);

  new WebpackDevServer(compiler, {
    publicPath: '/dist/',
    hot: true,
    historyApiFallback: true,
    proxy: {
      "*": "http://localhost:9000"
    }
  }).listen(3000, "localhost", function(err) {
      if(err) throw new gutil.PluginError("webpack-dev-server", err);
    });
};