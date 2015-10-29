var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var appFiles = ['index.js', 'lib/**/*.js', 'bin/**/*.js'];
var testFiles = ['./test/**/*.js'];

gulp.task('jshint', function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
  return gulp.src('./test/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));

});

gulp.task('mocha', function() {
  return gulp.src('./test/greet_test.js', {read: false})
    .pipe(mocha({reporter: 'spec'}));
});
