import React from 'react';
import {Link} from 'react-router-dom';

function SeriesBanner(props) {
    const {title, text, button} = props;

    const buttonElement = button ? <Link to="/series">Explore Series</Link> : null;
    const textElement = text ? <p>{text}</p> : null;
    const titleElement = title ? <h1>{title}</h1> : null;

    return (
        <div className="banner">
            {titleElement}
            {textElement}
            {buttonElement}
        </div>
    );
};

export default SeriesBanner;