// обработка html

const html = () => {
  return $.gulp.src($.path.html.src)
    .pipe($.plugins.plumber())
    .pipe($.plugins.fileInclude())
    .pipe($.plugins.webpHtml())
    .pipe($.plugins.gulpSize({ title: 'До сжатия' }))
    .pipe($.plugins.htmlMin($.app.htmlMin))
    .pipe($.plugins.size({ title: 'После сжатия'}))
    .pipe($.gulp.dest($.path.html.dest))
    .pipe($.browserSync.stream());
}
module.exports = html;
