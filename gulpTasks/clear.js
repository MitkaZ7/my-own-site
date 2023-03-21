// конфиг
const path = require('../config/path.js');
//плагины
const del = require('del');
// очистка сборки
const clear = () => {
  return del(path.root);
}
module.exports = clear;
