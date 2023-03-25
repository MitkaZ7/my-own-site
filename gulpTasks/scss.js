// обработка scss

const scss = () => {
  return $.gulp.src($.path.scss.src, { sourcemaps: $.app.isDev })
    .pipe($.plugins.plumber())
    .pipe($.sass())
    .pipe($.plugins.autoprefixer())
    .pipe($.plugins.size({ title: 'main.css' }))
    .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
    .pipe($.plugins.rename({ suffix: ".min" }))
    .pipe($.plugins.csso())
    .pipe($.plugins.size({ title: 'main.min.css' }))
    .pipe($.plugins.webpCss())
    .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))

}
module.exports = scss;
