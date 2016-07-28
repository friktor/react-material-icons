'use strict';

var gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('default', () => {
  gulp.src('src/*.js')
    // Compile es6 to es5
    .pipe(babel({
      plugins: ['transform-class-properties'],
      presets: ['es2015', 'react']
    }))
    .pipe(gulp.dest('build/'));
});
