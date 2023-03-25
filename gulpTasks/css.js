// обработка css
// const { src, dest } = require('gulp');

// // конфиг
// const path = require('../config/path.js');
// const app = require('../config/app.js');
//плагины
// const plumber = require('gulp-plumber');
// const notify = require('gulp-notify');
// const concat = require('gulp-concat');
// const cssImport = require('gulp-cssimport');
// const cssPrefixier = require('gulp-autoprefixer');
// const cssMinify = require('gulp-csso');
// const styleRename = require('gulp-rename');
// const size = require('gulp-size');
// const webpCss = require('gulp-webp-css');
const css = () => {
  return $.gulp.src($.path.css.src, { sourcemaps: $.app.isProd })
    .pipe($.plugins.plumber())
    .pipe($.plugins.concat('main.css'))
    .pipe($.plugins.cssImport())
    .pipe($.plugins.autoprefixer())
    .pipe($.plugins.size({title: 'main.css'}))
    .pipe($.plugins.dest($.path.css.dest, { sourcemaps: $.app.isProd }))
    .pipe($.plugins.rename({ suffix: ".min" }))
    .pipe($.plugins.csso())
    .pipe($.plugins.size({ title: 'main.min.css' }))
    .pipe($.plugins.webpCss())
    .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isProd }))

}
module.exports = css;
