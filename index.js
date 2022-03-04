import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

function extraiLinks(texto) {
    const regex = "";
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null) {
        arrayResultados.push( {[temp[1]]: temp[2]} )
    };
    return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, ' -> arquivo não encontrado'));
}

