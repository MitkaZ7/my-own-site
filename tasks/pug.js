// обработка pug
import gulp from 'gulp';

import path from '../config/path.js';
import plumber from 'gulp-plumber';
import webpHtml from 'gulp-webp-html';
import pug from 'gulp-pug';
import browserSync from 'browser-sync';

export default () => {
  return gulp.src(path.pug.src)
    .pipe(plumber())
    .pipe(pug())
    .pipe(webpHtml())
    .pipe(gulp.dest(path.pug.dest))
    .pipe(browserSync.stream());

}

