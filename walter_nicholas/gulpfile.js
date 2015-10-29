var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var appFiles = ['lib/**/*.js', 'bin/**/*.js'];
var testFiles = ['test/**/*.js'];

gulp.watch(appFiles, ['mocha:test', 'jshint:app']);
 
gulp.task('jshint:test', function (){
	return gulp.src(testFiles)
		.pipe(jshint({
		
			node: true,
			globals: {
				describe: true,
				it: true,
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
})

gulp.task('mocha:test', function (){
	return gulp.src(testFiles)
		.pipe(mocha({
		
			node: true,
			globals: {
				describe: true,
				it: true,
			}
		
		}))
//		.pipe(mocha({reporter: 'spec'}));
// 		took out mocha reporter because mocha results appear in console after running gulp already so it seemed redundant
});

gulp.task('default', ['jshint', 'mocha']);
gulp.task('jshint', ['jshint:test', 'jshint:app']);
gulp.task('mocha', ['mocha:test']);
