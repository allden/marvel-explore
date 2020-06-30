import React from 'react';
import Card from './Card';
import PaginationNav from './PaginationNav';

function CharacterCardList(props) {
    const {characters, nextPage, previousPage} = props;
    
    const characterCards = characters ? characters.map(character => {
        const {id} = character;

        return (
            <Card key={id} data={character} type="characters"/>
        );
    }) : null;
    
    return (
        <div className="d-flex flex-col align-center">
            <div className="item-grid container">
                {characterCards}
            </div>
            <PaginationNav nextPage={nextPage} previousPage={previousPage} type="characters"/>
        </div>
    );
};

export default CharacterCardList;