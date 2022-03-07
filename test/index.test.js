// import { pegaArquivo } from "../index.js";
const pegaArquivo = require('../index');

test('verifica se e uma funcao', () => {
    expect(typeof pegaArquivo).toBe('function');
  });