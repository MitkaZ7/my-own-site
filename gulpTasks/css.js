// обработка pug
const { src, dest } = require('gulp');

// конфиг
const path = require('../config/path.js');
const app = require('../config/app.js');
//плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const cssImport = require('gulp-cssimport');
const cssPrefixier = require('gulp-autoprefixer');
const cssMinify = require('gulp-csso');
const styleRename = require('gulp-rename');
const size = require('gulp-size');
const webpCss = require('gulp-webp-css');
const css = () => {
  return src(path.css.src, {sourcemaps: true})
    .pipe(plumber())
    .pipe(concat('main.css'))
    .pipe(cssImport())
    .pipe(cssPrefixier())
    .pipe(size({title: 'main.css'}))
    .pipe(dest(path.css.dest, { sourcemaps: true }))
    .pipe(styleRename({ suffix: ".min" }))
    .pipe(cssMinify())
    .pipe(size({ title: 'main.min.css' }))
    .pipe(webpCss())
    .pipe(dest(path.css.dest, { sourcemaps: true }))

}
module.exports = css;
