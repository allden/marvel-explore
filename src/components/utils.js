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

export default {formatImgSrc, getUrl};