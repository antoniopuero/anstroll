var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("../webpack.config.js");

module.exports = function (callback) {
  var compiler = webpack(webpackConfig, function(err) {
    if(err) throw new gutil.PluginError("webpack", err);
    callback();
  });
};