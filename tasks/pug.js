// обработка pug
const pug = () => {
  return $.gulp.src($.path.pug.src)
    .pipe($.plugins.plumber())
    .pipe($.plugins.pug())
    .pipe($.plugins.webpHtml())
    .pipe($.gulp.dest($.path.pug.dest))
    .pipe($.browserSync.stream());

}
module.exports = pug;
