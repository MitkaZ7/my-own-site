global.$ = {
  gulp: require('gulp'),
  plugins: require('gulp-load-plugins')(),
  sass: require('gulp-sass')(require('sass')),
  browserSync: require('browser-sync').create(),
  // конфигурация
  path: require('../config/path'),
  app: require('../config/app.js'),

}
//задачи
const requireDir = require('require-dir');
const task = requireDir('./tasks', { recurse: true});
// наблюдение
const watcher = () => {
  $.gulp.watch($.path.pug.watch, task.pug);
  $.gulp.watch($.path.scss.watch, task.scss);
  $.gulp.watch($.path.js.watch, task.js);
  $.gulp.watch($.path.img.watch, task.img);
  $.gulp.watch($.path.font.watch, task.font);

}
const build = $.gulp.series(
  clear,
  $.gulp.parallel(task.pug, task.scss, task.js, task.img, task.font)
);
const dev = $.gulp.series(
  build,
  $.gulp.parallel(watcher, task.server)
)

exports.pug = task.pug;
exports.scss = task.scss;
exports.js = task.js;
exports.img = task.img;
exports.font = task.font;


// сборка
exports.default = $.app.isProd ? build : dev;


