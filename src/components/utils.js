function formatImgSrc(thumbnail={}, type) {
    const {path, extension} = thumbnail;

    if(type) {
        return `${path}/${type}.${extension}`;
    } else {
        return `${path}.${extension}`;
    };
};

function getUrl() {
    return 'https://infinite-dusk-92659.herokuapp.com';
};

function createQuery(limit, offset, nameStartsWith='', titleStartsWith='') {
    const general = `offset=${offset}&limit=${limit}`;
    if(nameStartsWith) {
        return `${general}&nameStartsWith=${nameStartsWith}`;
    } else if(titleStartsWith) {
        return `${general}&titleStartsWith=${titleStartsWith}`;
    } else {
        return general;
    };
};

export default {formatImgSrc, getUrl, createQuery};