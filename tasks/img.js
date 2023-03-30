// обработка images

const img = () => {
  return $.gulp.src($.path.img.src)
    .pipe($.plugins.plumber())
    .pipe($.plugins.newer($.path.img.dest))
    .pipe($.plugins.webp())
    .pipe($.gulp.dest($.path.img.dest))
    .pipe($.plugins.newer($.path.img.dest))
    .pipe($.plugins.imagemin($.app.imageMin))
    .pipe($.gulp.src($.path.img.src))
    .pipe($.gulp.dest($.path.img.dest))
    .pipe($.browserSync.stream());

}
module.exports = img;
