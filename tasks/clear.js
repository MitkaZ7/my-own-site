// очистка сборки
import { deleteAsync } from 'del';
import path from '../config/path.js';
const clear = async () => {
  return await deleteAsync(path.root);
}
export default clear;
