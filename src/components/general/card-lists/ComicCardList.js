import React from 'react';
import Card from './Card';

function ComicsCardList(props) {
    const {comics} = props;

    const comicCards = comics ? comics.map(comic => {
        const {id} = comic;

        return (
            <Card key={id} data={comic} type="comics"/>
        );
    }) : null;

    return (
        <div className="item-grid container">
            {comicCards}
        </div>
    );
};

export default ComicsCardList;