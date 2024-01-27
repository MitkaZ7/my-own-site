// обработка images
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import path from '../config/path.js';
import app from '../config/app.js';
import plumber from 'gulp-plumber';
import newer from 'gulp-newer';
import webp from 'gulp-webp';
import browserSync from 'browser-sync';

const img = () => {
  return gulp.src(path.img.src)
    .pipe(plumber())
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(gulp.dest(path.img.dest))
    .pipe(newer(path.img.dest))
    .pipe(imagemin(app.imageMin))
    .pipe(gulp.src(path.img.src))
    .pipe(gulp.dest(path.img.dest))
    .pipe(browserSync.stream());

}
export default img;
