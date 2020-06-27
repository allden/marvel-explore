import React from 'react';
import {Link} from 'react-router-dom';
import utils from '../utils';

function ComicsCardList(props) {
    const {comics} = props;

    const comicCards = comics ? comics.map(comic => {
        const {thumbnail, title, description, id} = comic;
        const imgSrc = utils.formatImgSrc(thumbnail);
        const descriptionParagraph = description ? <p>{description}</p> : null;

        return (
            <div className="card" key={id}>
                <p>{title}</p>
                <Link to={`/comics/${id}`}><img src={imgSrc} alt={`Cover of ${title}`} /></Link>
                {descriptionParagraph}
            </div>
        );
    }) : null;

    return comicCards;
};

export default ComicsCardList;