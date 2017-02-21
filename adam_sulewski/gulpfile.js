var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var appFiles = ['index.js', 'lib/**/*.js', 'gulpfile.js'];
var testFiles =  ['test/**/*.js'];
var files = appFiles.concat(testFiles);

gulp.task('mocha', ['jshint'], function() {
  return gulp.src('test/greet_test.js', {read: false})
    .pipe(mocha());
});

gulp.task('jshint:test', function() {
  return gulp.src(testFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('jshint:app', function() {
  return gulp.src(appFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('watch', function() {
  gulp.watch(files, ['mocha']);
});

gulp.task('jshint', ['jshint:test', 'jshint:app']);
gulp.task('default', ['mocha']);
