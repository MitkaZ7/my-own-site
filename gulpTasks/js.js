// обработка pug
const { src, dest } = require('gulp');

// конфиг
const path = require('../config/path.js');
const app = require('../config/app.js');
//плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const js = () => {
  return src(path.js.src, {sourcemaps: true})
    .pipe(plumber())
    .pipe(dest(path.js.dest, { sourcemaps: true }))

}
module.exports = js;
