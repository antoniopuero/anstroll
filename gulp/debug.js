var nodeInspector = require('gulp-node-inspector');
var gulp = require('gulp');

module.exports = function () {
  gulp.src([])
    .pipe(nodeInspector());

};