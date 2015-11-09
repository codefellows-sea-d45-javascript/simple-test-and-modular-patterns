var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var testFiles = ['test/**/*.js'];
var appFiles = ['index.js', 'lib/**/*.js', 'bin/**/*.js'];

gulp.task('jshint:test', function(){
  return gulp.src(testFiles)
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

gulp.task('jshint:app', function(){
  return gulp.src(appFiles)
    .pipe(jshint({
      node: true
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('mocha', function(){
  return gulp.src('./test/greet_test.js')
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('default', ['jshint:test', 'jshint:app', 'mocha']);
