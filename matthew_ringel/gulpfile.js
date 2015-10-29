var gulp = require('gulp');
var jshint = require('gulp-jshint');
var appFiles = ['index.js', 'lib/**/*.js', 'bin/**/*.js'];
var testFiles = ['./test/**/*.js'];

gulp.task('jshint', function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
