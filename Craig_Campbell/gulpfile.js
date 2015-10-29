'use strict';

var gulp = require('gulp');
var gulpMocha = require('gulp-mocha');
var jshint = require('gulp-jshint');

gulp.task('jshint', function(){
  return gulp.src(['gulpfile.js', 'index.js', 'lib/greet.js', 'lib/timegreet.js', 'test/greet_test.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});


gulp.task('test', function(){
  return gulp.src('test/**/*test.js')
  .pipe(gulpMocha({reporter: 'nyan'}));
});


gulp.task('default', ['jshint' , 'test']);

var watcher = gulp.watch(['gulpfile.js', 'index.js', 'lib/greet.js', 'lib/timegreet.js', 'test/greet_test.js'], ['jshint', 'test']);

watcher.on('change', function(e){
  console.log('Dude, your file: ' + e.path + ' was ' + e.type + ' SO LET\'S RUN THOSE TASKS AGAIN');
});
