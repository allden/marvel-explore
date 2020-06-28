import React from 'react';
import utils from '../../utils';
import {Link} from 'react-router-dom';

function CharacterCardList(props) {
    const {characters} = props;
    
    const characterCards = characters ? characters.map(character => {
        const {thumbnail, name, description, id} = character;
        // external function that formats the img path for example http://www.url.com/1234567/portrait_fantastic.jpg
        const imgSrc = utils.formatImgSrc(thumbnail);

        // if there is no description, we do not want the paragraph to be present
        const descriptionParagraph = description ? <p>{description}</p> : null;

        return (
            <div className="card" key={id}>
                <p>{name}</p>
                <Link to={`/characters/${id}`}><img src={imgSrc} alt={`Portrait of ${name}`} /></Link>
                {descriptionParagraph}
            </div>
        )
    }) : null;
    
    return characterCards;
};

export default CharacterCardList;