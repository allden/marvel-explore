import React from 'react';
import {Link} from 'react-router-dom';

function CharacterBanner(props) {
    const {button, text, title} = props;
    const buttonElement = button ? <Link href="/characters">Explore Characters</Link> : null;
    const textElement = text ? <p>{text}</p> : null;
    // the index will have multiple h1 elements because they are all of equal importance
    const titleElement = title ? <h1>{title}</h1> : null;

    return (
        <div className="banner">
            {titleElement}
            {textElement}
            {buttonElement}
        </div>
    );
};

export default CharacterBanner;