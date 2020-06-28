import React from 'react';
import {Link} from 'react-router-dom';

function ComicBanner(props) {
    const {title, text, button} = props;
    const buttonElement = button ? <Link to="/comics">Explore Comics</Link> : null;
    const titleElement = title ? <h1>{title}</h1> : null;
    const textElement = text ? <p>{text}</p> : null;

    return (
        <div className="banner">
            {titleElement}
            {textElement}
            {buttonElement}
        </div>
    );
};

export default ComicBanner;