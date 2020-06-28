import React from 'react';
import {Link} from 'react-router-dom';
import utils from '../../utils';

function SeriesCardList(props) {
    const {series} = props;
    
    const seriesCards = series ? series.map(seriesSingular => {
        const {id, title, description, thumbnail} = seriesSingular;
        const imgSrc = utils.formatImgSrc(thumbnail);
        const descriptionParagraph = description ? <p>{description}</p> : null;
        
        return (
            <div className="card" key={id}>
                <p>{title}</p>
                <Link to={`/series/${id}`}><img src={imgSrc} alt={`${title} cover`} /></Link>
                {descriptionParagraph}
            </div>
        )
    }) : null;

    return seriesCards;
};

export default SeriesCardList;