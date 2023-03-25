// обработка javascript
const webpackStream = require('webpack-stream');

const js = () => {
  return $.gulp.src($.path.js.src, { sourcemaps: $.app.isProd })
    .pipe($.plugins.plumber())
    .pipe($.plugins.babel())
    .pipe(webpackStream($.app.webpack))
    .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isProd }))

}
module.exports = js;
