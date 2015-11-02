'use strict';

//include gulp & plugins
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

//define folders
var appFiles = ['index.js', 'lib/**/*.js', 'bin/**/*.js'];
var testFile = ['./test/**/*.js'];

//run jshint on test file and tell it to ignore global variables so that it won't return errors
gulp.task('jshint:test', function() {
  return gulp.src(testFile)
    .pipe(jshint({
      node: true,
      globals: {
        describe: true,
        it: true,
        before: true,
        after: true,
      }
    }))
    .pipe(jshint.reporter('default'));
});

//run jshint on app files
gulp.task('jshint:app', function() {
  return gulp.src(appFiles)
    .pipe(jshint({
      node: true
    }))
    .pipe(jshint.reporter('default'));
});

//run mocha on test file
gulp.task('mocha:test', function() {
  return gulp.src(testFile)
    .pipe(mocha({
      node: true,
      globals: {
        describe: true,
        it: true,
        before: true,
        after: true,
      }
    }))
    .pipe(mocha({reporter:'spec'}));
});

//BONUS - watch task *this is incomplete*
gulp.task('watch', function() {
  gulp.watch(appFiles, ['jshint:app']);
  gulp.watch(testFile, ['jshint:test', 'mocha:test']);
});

//set default task to run all
gulp.task('default', ['jshint:test', 'jshint:app', 'mocha:test', 'watch']);



