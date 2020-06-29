import React from 'react';
import Card from './Card';

function CreatorCardList(props) {
    const {creators} = props;
    
    const creatorCards = creators ? creators.map(creator => {
        const {id} = creator;

        return (
            <Card key={id} data={creator} type="creators"/>
        );
    }) : null;

    return (
        <div className="item-grid container">
            {creatorCards}
        </div>
    );
};

export default CreatorCardList;