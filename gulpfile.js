global.$ = {
  gulp: require('gulp'),
  plugins: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  // конфигурация
  path: require('./config/path'),
  app: require('./config/app.js')

}
//задачи
const clear = require('./gulpTasks/clear.js');
const pug = require('./gulpTasks/pug.js');
const css = require('./gulpTasks/css.js');
const scss = require('./gulpTasks/scss.js');
const js = require('./gulpTasks/js.js');
const img = require('./gulpTasks/img.js');
const font = require('./gulpTasks/font.js');
// сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: $.path.root
    }
  })
}
// наблюдение
const watcher = () => {
  watch($.path.pug.watch, pug).on('all', browserSync.reload);
  watch($.path.scss.watch, scss).on('all', browserSync.reload);
  watch($.path.js.watch, js).on('all', browserSync.reload);
  watch($.path.img.watch, img).on('all', browserSync.reload);
  watch($.path.font.watch, font).on('all', browserSync.reload);

}
const build = $.gulp.series(
  clear,
  $.gulp.parallel(pug, scss, js, img, font)
);
const dev = $.gulp.series(
  build,
  $.gulp.parallel(watcher, server)
)

exports.pug = pug;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;


// сборка
exports.default = $.app.isProd ? build : dev;


