import React from 'react';
import {Link} from 'react-router-dom';
import utils from '../../utils';

function CreatorCardList(props) {
    const {creators} = props;
    
    const creatorCards = creators ? creators.map(creator => {
        const {fullName, firstName, description, thumbnail, id} = creator;
        const imgSrc = utils.formatImgSrc(thumbnail);

        return (
            <div className="card" key={id}>
                <h3>{fullName || firstName}</h3>
                <Link to={`/creators/${id}`}><img src={imgSrc} alt={`Cover of ${fullName || firstName}`} /></Link>
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