import { fetch } from 'node-fetch';

function geraArrayDeURLs(arrayLinks) {
    console.log(arrayLinks.map(objetoLink => Object.values(objetoLink).join()))
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

function validaURLs(arrayLinks) {
    return geraArrayDeURLs(arrayLinks)
};

export { validaURLs };

