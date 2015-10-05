var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var path = require('path');
var gulp = require('gulp');

module.exports = function () {
  livereload.listen();
  nodemon({ script: path.resolve(__dirname, '../bin/www')
    , ext: 'html js less jade'
    , ignore: [path.resolve(__dirname, '../public/dist/bundle.js'), path.resolve(__dirname, '../gulp/*')]
    , tasks: ['webpack']
    })
    .on('start', function() {
      setTimeout(livereload.reload, 500);
    })
};