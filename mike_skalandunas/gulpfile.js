'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var appFiles = ['index.js', 'lib/**/*.js', 'bin/**/*.js'];
var testFiles = ['./test/**/*.js'];
var watcher = gulp.watch('./**/*.js', ['jshint:test']);

watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
})

gulp.task('jshint:test', function() {
  return gulp.src(testFiles)
    .pipe(jshint.reporter('default'));
});

gulp.task('jshint:app', function() {
  return gulp.src(appFiles)
    .pipe(jshint({
      node: true
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('default', function() {
  return gulp.src('greet_test.js', {
    read: false
  })
  .pipe(mocha({reporter: 'spec'}));
});

gulp.task('jshint', ['jshint:test', 'jshint:app']);
gulp.task('default', ['jshint']);
