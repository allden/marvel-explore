import React from 'react';
import {Link} from 'react-router-dom';
import utils from '../../utils';

function CreatorCardList(props) {
    const {creators} = props;
    
    const creatorCards = creators ? creators.map(creator => {
        const {fullName, firstName, description, thumbnail, id} = creator;
        const imgSrc = utils.formatImgSrc(thumbnail);
        const descriptionParagraph = description ? <p>{description}</p> : null;

        return (
            <div className="card" key={id}>
                <h3>{fullName || firstName}</h3>
                <Link to={`/series/${id}`}><img src={imgSrc} alt={`Cover of ${fullName || firstName}`} /></Link>
                {descriptionParagraph}
            </div>
        )
    }) : null;

    return (
        <div>
            {creatorCards}
        </div>
    );
};

export default CreatorCardList;