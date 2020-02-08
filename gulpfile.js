var gulp = require('gulp');
var pug = require('gulp-pug');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var pump = require('pump');
var autoprefixer = require('gulp-autoprefixer');
var OUT_DIR = './docs';

gulp.task('assets', () => {
  return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest(`${OUT_DIR}/assets`));
});

gulp.task('js', function (cb) {
  pump([
      gulp.src(['./lib/**/*.js', './src/js/**/*.js']),
      concat('main.min.js'),
      uglify(),
      gulp.dest(`${OUT_DIR}`)
    ],
    cb
  );
});

gulp.task('pug', () => {
  return gulp.src('./src/{index,learn,portfolio,mrmakesaword-privacy-policy}.pug')
    .pipe(pug({}))
    .pipe(gulp.dest(OUT_DIR));
});

gulp.task('css', function () {
  return gulp.src('./src/css/*')
    .pipe(autoprefixer())
    .pipe(concat('main.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(OUT_DIR));
});

gulp.task('favicon', () => {
  return gulp.src('./src/favicon.ico')
    .pipe(gulp.dest(OUT_DIR));
});

gulp.task('default', ['pug', 'css', 'js', 'assets', 'favicon'], () => {
  gulp.watch('./src/**/*', ['pug', 'css', 'js', 'assets']);
});
