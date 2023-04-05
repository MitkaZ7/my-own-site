// обработка scss
import gulp from 'gulp';
import path from '../config/path.js';
import app from '../config/app.js';
import autoprefixer from 'gulp-autoprefixer';
import size from 'gulp-size';
import plumber from 'gulp-plumber';
import webpCss from 'gulp-webp-css';
import browserSync from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import csso from 'gulp-csso';

const sass = gulpSass(dartSass);

export default () => {
  return gulp.src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(size({ title: 'main.css' }))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(size({ title: 'main.min.css' }))
    .pipe(webpCss())
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
    .pipe(browserSync.stream());
}

