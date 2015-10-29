var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var appFiles = ['index.js', 'lib/**/*.js', 'bin/**/*.js'];
var testFiles = ['test/**/*.js'];

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

gulp.task('jshint:app', function(){
  return gulp.src(appFiles)
    .pipe(jshint({
        node: true
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('mocha', ['jshint'], function(){
  return gulp.src('./test/greet_test.js', {read: false})
    .pipe(mocha({reporter: 'spec'}));
});

var watcher = gulp.watch('**/*.js', ['reload']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});


gulp.task('jshint', ['jshint:app', 'jshint:app']);
gulp.task('default', ['jshint', 'mocha']);
gulp.task('reload', ['default']);