var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var appFiles = ['index.js', 'lib/**/*.js', 'bin/**/*.js']; //Q:Why is 'bin/**/*.js' included?
var testFiles = ['./test/**/*.js'];

gulp.task('jshint:test', function() {
  return gulp.src('testFiles')
    .pipe(jshint({ //sends testFiles to jshint with options for encountered globals
      node: true, //this is a default setting
      globals: { //
        describe: true,
        it: true,
        before: true, //not actually in my file yet
        after: true //not actually in my file yet
      }
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('jshint:app', function() {
  return gulp.src(appFiles)
    .pipe(jshint({
      node: true
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('mochatest', function() {
  return gulp.src('test/*.js')
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('jshint', ['jshint:test', 'jshint:app']);
gulp.task('default', ['jshint', 'mochatest']);
