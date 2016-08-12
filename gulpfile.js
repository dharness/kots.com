var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var OUT_DIR = './build';

gulp.task('copy', () => {
  return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest(`${OUT_DIR}/assets`));
});

gulp.task('pug', () => {
  return gulp.src('./src/index.pug')
    .pipe(pug({}))
    .pipe(gulp.dest(OUT_DIR));
});

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(OUT_DIR));
});

gulp.task('default', ['pug', 'sass', 'copy'], () => {
  gulp.watch('./src/**/*', ['pug', 'sass', 'copy']);
});