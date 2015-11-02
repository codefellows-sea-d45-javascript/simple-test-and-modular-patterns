var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var appFiles = ['greet.js', 'lib/**/*.js', 'bin/**/*.js'];
var testFiles = ['gulpfile.js','test/**/*.js'];

gulp.task('jshint:apps', function() {
  return gulp.src(appFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jshint:test', function() {
  return gulp.src(testFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('mocha', function() {
  return gulp.src('./test/greet_test.js', {
    read:false})
  .pipe(mocha());
});

gulp.task('watch', function() {
  gulp.watch(appFiles, ['jshint:apps', 'mocha']);
  gulp.watch(testFiles, ['jshint:test']);
});

gulp.task('default', ['watch']);
