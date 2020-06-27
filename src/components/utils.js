function formatImgSrc(thumbnail={}, type='portrait_fantastic') {
    const {path, extension} = thumbnail;
    return `${path}/${type}.${extension}`
};

function getUrl() {
    return 'https://infinite-dusk-92659.herokuapp.com';
};

export default {formatImgSrc, getUrl};