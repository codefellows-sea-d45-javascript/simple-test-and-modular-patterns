var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var changed = require('gulp-changed');

var appFiles = ['index.js', './lib/greet.js'];
var testFiles = ['./test/**/*.js'];
var dest = "./dist/";

gulp.task('jshint:test', function() {
  return gulp.src(testFiles)
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('jshint:app', function() {
  return gulp.src(appFiles)
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('mocha', function() {
  return gulp.src(testFiles, {read: false})
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('changed', function() {
  return gulp.src(appFiles, testFiles)
  .pipe(changed(dest))
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('jshint', ['jshint:test', 'jshint:app']);
gulp.task('default', ['jshint', 'mocha', 'changed']);