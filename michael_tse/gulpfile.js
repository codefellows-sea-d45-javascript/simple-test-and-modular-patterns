'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var appFiles = ['index.js', 'lib/**/*.js', 'bin/**/*.js', './test/**/*.js'];
var testFiles = ['./test/**/*.js'];

gulp.task('mocha:test', function() {
  return gulp.src(testFiles)
    .pipe(mocha({
      node: true,
      globals: {
        describe: true,
        it: true,
        before: true,
        after: true
      }
    }))
    .pipe(mocha.reporter('default'));
});

gulp.task('jshint:app', function() {
  return gulp.src(appFiles)
    .pipe(jshint({
      node: true,
      globals: {
        describe: true,
        it: true,
        before: true,
        after: true
      }
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('mocha:app', function() {
  return gulp.src(testFiles, {
    read: false
  })
  .pipe(mocha({reporter:'spec'}));
});

gulp.task('jshint', ['jshint:app']);
gulp.task('mocha', ['mocha:app']);
gulp.task('default', ['jshint:app', 'mocha:app']);
