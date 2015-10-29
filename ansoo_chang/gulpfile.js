var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha')
var appFiles = ['index.js', 'lib/**/*.js', 'bin/**/*.js'];
var testFiles = ['test/**/*.js'];

gulp.task('jshint:test', function() {
	return gulp.src(testFiles)
	  .pipe(jshint({
      options: {
      	node: true,
      	globals: {
      		describe: true,
      		it: true,
      		before: true,
      		after: true
      	}
      }
	  }))
	  .pipe(jshint.reporter('default'));
});


gulp.task('mocha:test', function() {
	return gulp.src(testFiles)
	  .pipe(mocha({
      options: {
      	node: true,
      	globals: {
      		describe: true,
      		it: true,
      		before: true,
      		after: true
      	}
      }
	  }))
	  .pipe(jshint.reporter('default'));
});
