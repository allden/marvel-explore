import React from 'react';
import Card from './Card';
import PaginationNav from './PaginationNav';

function CreatorCardList(props) {
    const {creators, nextPage, previousPage} = props;
    
    const creatorCards = creators ? creators.map(creator => {
        const {id} = creator;

        return (
            <Card key={id} data={creator} type="creators"/>
        );
    }) : null;

    return (
        <div className="d-flex flex-col align-center">
            <div className="item-grid container">
                {creatorCards}
            </div>
            <PaginationNav nextPage={nextPage} previousPage={previousPage} type="creators"/>
        </div>
    );
};

export default CreatorCardList;