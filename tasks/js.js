// обработка javascript
import webpackStream from 'webpack-stream';
import gulp from 'gulp';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import path from '../config/path.js';
import app from '../config/app.js';
import babel from 'gulp-babel';
const js = () => {
  return gulp.src(path.js.src, { sourcemaps: app.isProd })
    .pipe(plumber())
    .pipe(babel())
    .pipe(webpackStream(app.webpack))
    .pipe(gulp.dest(path.js.dest, { sourcemaps: app.isProd }))
    .pipe(browserSync.stream());
}
export default js;
