 import gulp from 'gulp';
 import path from './config/path.js';
 import app from './config/app.js';
 import browserSync from 'browser-sync';
// сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  })
}


//задачи
import clear from './tasks/clear.js';
import pug from './tasks/pug.js';
import css from './tasks/css.js';
import scss from './tasks/scss.js';
import js from './tasks/js.js';
import img from './tasks/img.js';
import font from './tasks/font.js';


// наблюдатель
const watcher = () => {
  gulp.watch(path.pug.watch, pug).on('all', browserSync.reload);
  // gulp.watch(path.scss.watch, scss).on('all', browserSync.reload);
  // gulp.watch(path.js.watch, js).on('all', browserSync.reload);
  // gulp.watch(path.img.watch, img).on('all', browserSync.reload);
  // gulp.watch(path.font.watch, font).on('all', browserSync.reload);

}
//
const build = gulp.series(
  clear,
  gulp.parallel(pug,scss,img,font,js)
)

const dev = gulp.series(
  build,
  gulp.parallel(server, watcher)
)


export { clear, pug, scss, js, img, font };



// сборка
export default app.isProd
  ? build
  : dev;

