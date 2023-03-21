const { watch, series, parallel} = require('gulp');
// конфиг
const path = require('./config/path');
//плагины
const browserSync = require('browser-sync').create();

// сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  })
}
//задачи
const clear = require('./gulpTasks/clear.js');
const pug = require('./gulpTasks/pug.js');
const css = require('./gulpTasks/css.js')
const scss = require('./gulpTasks/scss.js')
const js = require('./gulpTasks/js.js');


// наблюдатель
const watcher = () => {
  watch(path.pug.watch, pug).on('all', browserSync.reload);
  watch(path.scss.watch, scss).on('all', browserSync.reload);
  watch(path.js.watch, js).on('all', browserSync.reload);
}

exports.pug = pug;
exports.scss = scss;
exports.js = js;


// сборка
exports.dev = series(
  clear,
  parallel(pug,scss,js),
  parallel(watcher, server)
)
