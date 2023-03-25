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
const ttfToWoff2 = require('gulp-ttf2woff2');


const font = () => {
  return $.gulp.src($.path.font.src)
    .pipe($.plugins.plumber())
    .pipe($.plugins.newer($.path.font.dest))
    .pipe($.plugins.fonterUnx($.app.fonter))
    .pipe($.gulp.dest($.path.font.dest))
    .pipe($.plugins.ttf2woff2())
    .pipe($.gulp.dest($.path.font.dest))
    .pipe($.browserSync.stream());
}
module.exports = font;
