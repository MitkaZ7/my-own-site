// обработка шрифтов
import gulp from 'gulp';
import path from '../config/path.js';
import app from '../config/app.js';
import plumber from  'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';
import ttf2woff2 from 'gulp-ttf2woff2';
import fonterUnx from 'gulp-fonter-unx';
import browserSync from 'browser-sync';

export default () => {
  return gulp.src(path.font.src)
    .pipe(plumber())
    .pipe(newer(path.font.dest))
    .pipe(fonterUnx(app.fonter))
    .pipe(gulp.dest(path.font.dest))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(path.font.dest))
    .pipe(browserSync.stream());
}

