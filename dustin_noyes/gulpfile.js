var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var watch = require('gulp-watch');

var appFiles = ['index.js', 'lib/**/*.js', 'bin/**/*.js'];

//testFiles have extra globals that should not throw erros in jshint
var testFiles = ['./test/**/*.js'];

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
  })).pipe(jshint.reporter('default'));
});

gulp.task('jshint:app', function(){
  return gulp.src(appFiles)
    .pipe(jshint({
      node: true
    })).pipe(jshint.reporter('default'));
});

//CREDIT:  https://gist.github.com/donovanh/9758053
gulp.task('mocha', function () {
    gulp.src(testFiles)
        .pipe(mocha({
            reporter: 'nyan'
        }));
});


gulp.task('default', ['jshint:app', 'jshint:test', 'mocha']);

var appWatcher = gulp.watch([appFiles], ['default']);
appWatcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

var testWatcher = gulp.watch([testFiles], ['default']);
testWatcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
