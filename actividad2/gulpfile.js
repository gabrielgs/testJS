var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('start', function() {
  nodemon({
    script: './',
    ext:'js',
    ignore: ['node_modules/']
  });
});