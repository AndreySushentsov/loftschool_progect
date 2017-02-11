'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./source/style/app.scss')
         .pipe(sass())
         .pipe(gulp.dest('./build/style/app.css'))
});
