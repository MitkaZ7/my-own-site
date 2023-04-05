// сервер
export default () => {
  $.browserSync.init({
    server: {
      baseDir: $.path.root
    }
  })
}

