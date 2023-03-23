// обработка pug
const { src, dest } = require('gulp');

// конфиг
const path = require('../config/path.js');
const app = require('../config/app.js');
//плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const cssPrefixier = require('gulp-autoprefixer');
const cssMinify = require('gulp-csso');
const styleRename = require('gulp-rename');
const size = require('gulp-size');
const sass = require('gulp-sass')(require('sass'));
const webpCss = require('gulp-webp-css');

const scss = () => {
  return src(path.scss.src, {sourcemaps: true})
    .pipe(plumber())
    .pipe(sass())
    .pipe(cssPrefixier())
    .pipe(size({title: 'main.css'}))
    .pipe(dest(path.scss.dest, { sourcemaps: true }))
    .pipe(styleRename({ suffix: ".min" }))
    .pipe(cssMinify())
    .pipe(size({ title: 'main.min.css' }))
    .pipe(webpCss())
    .pipe(dest(path.scss.dest, { sourcemaps: true }))

}
module.exports = scss;
