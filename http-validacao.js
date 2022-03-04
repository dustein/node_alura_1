function geraArrayDeURLs(arrayDeLinks) {
    return arrayDeLinks.map(link => Object.values(link))
}

function validaURLs(arrayLinks) {
    return geraArrayDeURLs(arrayLinks);
};

export { validaURLs };

