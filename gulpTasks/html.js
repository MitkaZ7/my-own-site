const { src, dest, watch } = require('gulp');
// конфиг
const path = require('../config/path.js');
const app = require('../config/app.js')
//плагины
const fileInclude = require('gulp-file-include');
const htmlMin = require('gulp-htmlmin');
const gulpSize = require('gulp-size');
const webpHtml =  require('gulp-webp-html');


const plumber = require('gulp-plumber');

const html = () => {
  return src(path.html.src)
    .pipe(plumber())
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(gulpSize({ title: 'До сжатия' }))
    .pipe(htmlMin(app.htmlMin))
    .pipe(gulpSize({ title: 'После сжатия'}))
    .pipe(dest(path.html.dest))

}
module.exports = html;
