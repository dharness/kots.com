var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var OUT_DIR = './build';

gulp.task('assets', () => {
  return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest(`${OUT_DIR}/assets`));
});

gulp.task('js', () => {
  return gulp.src('./src/js/**/*')
    .pipe(gulp.dest(`${OUT_DIR}/js`));
});

gulp.task('pug', () => {
  return gulp.src('./src/{index,learn,portfolio}.pug')
    .pipe(pug({}))
    .pipe(gulp.dest(OUT_DIR));
});

gulp.task('sass', function () {
  return gulp.src('./src/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(OUT_DIR));
});

gulp.task('default', ['pug', 'sass', 'assets', 'js'], () => {
  gulp.watch('./src/**/*', ['pug', 'sass', 'assets', 'js']);
});
