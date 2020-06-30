import React from 'react';
import Card from './Card';
import PaginationNav from './PaginationNav';

function ComicsCardList(props) {
    const {comics, nextPage, previousPage} = props;

    const comicCards = comics ? comics.map(comic => {
        const {id} = comic;

        return (
            <Card key={id} data={comic} type="comics"/>
        );
    }) : null;

    return (
        <div className="d-flex flex-col align-center">
            <div className="item-grid container">
                {comicCards}
            </div>
            <PaginationNav nextPage={nextPage} previousPage={previousPage} type="comics"/>
        </div>
    );
};

export default ComicsCardList;