// обработка pug
const { src, dest } = require('gulp');

// конфиг
const path = require('../config/path.js');
const app = require('../config/app.js');
//плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const gulpNewer = require('gulp-newer');
const gulpFonter = require('gulp-fonter-unx');



const font = () => {
  return src(path.font.src)
    .pipe(plumber())
    .pipe(gulpNewer(path.font.dest))
    .pipe(gulpFonter())
    .pipe(dest(path.font.dest))

}
module.exports = font;
