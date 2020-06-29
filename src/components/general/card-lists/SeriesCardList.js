import React from 'react';
import Card from './Card';

function SeriesCardList(props) {
    const {series} = props;
    
    const seriesCards = series ? series.map(seriesSingular => {
        const {id} = seriesSingular;

        return (
            <Card key={id} data={seriesSingular} type="series"/>
        );
    }) : null;

    return (
        <div className="item-grid container">
            {seriesCards}
        </div>
    );
};

export default SeriesCardList;