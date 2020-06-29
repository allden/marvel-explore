import React from 'react';
import Card from './Card';

function CharacterCardList(props) {
    const {characters} = props;
    
    const characterCards = characters ? characters.map(character => {
        const {id} = character;

        return (
            <Card key={id} data={character} type="characters"/>
        );
    }) : null;
    
    return (
        <div className="item-grid container">
            {characterCards}
        </div>
    );
};

export default CharacterCardList;