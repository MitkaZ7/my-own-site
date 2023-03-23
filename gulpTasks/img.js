// обработка pug
const { src, dest } = require('gulp');

// конфиг
const path = require('../config/path.js');
const app = require('../config/app.js');
//плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imageMin = require('gulp-imagemin');
const gulpNewer = require('gulp-newer');
const webp = require('gulp-webp');

const img = () => {
  return src(path.img.src)
    .pipe(plumber())
    .pipe(gulpNewer(path.img.dest))
    .pipe(webp())
    .pipe(dest(path.img.dest))
    .pipe(gulpNewer(path.img.dest))
    .pipe(imageMin(app.imageMin))
    .pipe(src(path.img.src))
    .pipe(dest(path.img.dest))

}
module.exports = img;
