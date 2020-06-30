import React from 'react';
import Card from './Card';
import PaginationNav from './PaginationNav';

function SeriesCardList(props) {
    const {series, nextPage, previousPage} = props;
    
    const seriesCards = series ? series.map(seriesSingular => {
        const {id} = seriesSingular;

        return (
            <Card key={id} data={seriesSingular} type="series"/>
        );
    }) : null;

    return (
        <div className="d-flex flex-col align-center">
            <div className="item-grid container">
                {seriesCards}
            </div>
            <PaginationNav nextPage={nextPage} previousPage={previousPage} type="series"/>
        </div>
    );
};

export default SeriesCardList;