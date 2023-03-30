// обработка css

const css = () => {
  return $.gulp.src($.path.css.src, { sourcemaps: $.app.isProd })
    .pipe($.plugins.plumber())
    .pipe($.plugins.concat('main.css'))
    .pipe($.plugins.cssImport())
    .pipe($.plugins.autoprefixer())
    .pipe($.plugins.size({title: 'main.css'}))
    .pipe($.plugins.dest($.path.css.dest, { sourcemaps: $.app.isProd }))
    .pipe($.plugins.rename({ suffix: ".min" }))
    .pipe($.plugins.csso())
    .pipe($.plugins.size({ title: 'main.min.css' }))
    .pipe($.plugins.webpCss())
    .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isProd }))
    .pipe($.browserSync.stream());
}
module.exports = css;
