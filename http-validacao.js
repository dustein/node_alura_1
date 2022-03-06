const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function checkStatus(arrayURLs) {
    const arrayStatus = await Promise.all(arrayURLs.map(async (url) => {
        const resp = await fetch(url)
        return resp.status;
    }))
    return arrayStatus
}

function geraArrayDeURLs(arrayLinks) {
    console.log(arrayLinks.map(objetoLink => Object.values(objetoLink).join()))
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await checkStatus(links);
    return statusLinks;
};

export { validaURLs };

