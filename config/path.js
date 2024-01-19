const pathSrc = './src';
const pathDest = './dist';

const path  = {
  root: pathDest,
  html: {
    src: pathSrc + '/html/*.html',
    watch:  pathSrc + '/html/**/*.html',
    dest: pathDest
  },
  pug: {
    src: pathSrc + '/pug/*.pug',
    watch: pathSrc + '/pug/**/*.pug',
    dest: pathDest
  },
  css: {
    src: pathSrc + '/css/*.css',
    watch: pathSrc + '/css/**/*.css',
    dest: pathDest + '/css'
  },
  scss: {
    src: pathSrc + '/scss/*.scss',
    watch: pathSrc + '/scss/**/*.scss',
    dest: pathDest + '/css'
  },
  js: {
    src: pathSrc + '/scripts/*.js',
    watch: pathSrc + '/scripts/**/*.js',
    dest: pathDest + '/scripts'
  },
  img: {
    src: pathSrc + '/img/*.{png,jpeg,jpg,gif,svg}',
    watch: pathSrc + '/img/**/*.{png,jpeg,jpg,gif,svg}',
    dest: pathDest + '/img'
  },
  font: {
    src: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2}',
    watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2}',
    dest: pathDest + '/fonts'
  }

}

export default path;
