var gulp = require('gulp');
var jshint = require('gulp-jshint');
var appFiles = ['index.js','lib/**/*.js', 'bin/**/*.js'];
var testFiles = ['./test/**/*.js'];

//From in-class code

gulp.task('jshint:test', function (){
  return gulp.src(testFiles)
    .pipe(jshint({
      node:true,
      globals: {
        describe: true,
        it: true,
        before: true,
        after: true
      }
    }))
    .pipe(jshint.reporter('default'));
});
