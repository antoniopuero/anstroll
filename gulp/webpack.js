var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("../webpack.config.js");

module.exports = function(callback) {
  // run webpack
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    callback();
  });
};