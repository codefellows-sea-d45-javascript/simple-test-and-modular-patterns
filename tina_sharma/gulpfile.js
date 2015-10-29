var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var appFiles = ['index.js', 'lib/**/*.js'];
var testFiles = ['./test/**/*.js'];

//adding variable for automatic run of jshint and mocha when changes are made to any js file.
var watchFiles = ['index.js', 'lib/**/*.js', './test/**/*.js'];

gulp.task('jshint:test', function() {
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

gulp.task('jshint:app', function() {
  return gulp.src(appFiles)
    .pipe(jshint({
      node: true
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('default', ['watch']);
//adding watch task to jshint
gulp.task('watch', function(){
  gulp.watch(watchFiles, ['jshint']);
});

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
    .pipe(mocha({reporter:'spec'}));
});

//adding watch task to mocha
//source https://github.com/gulpjs/gulp/blob/master/docs/recipes/mocha-test-runner-with-gulp.md
gulp.task('watch-mocha', function(){
  gulp.watch(watchFiles, ['mocha']);
});

gulp.task('jshint', ['jshint:test', 'jshint:app']);
gulp.task('mocha', ['mocha:test']);
gulp.task('default', ['jshint', 'mocha']);
