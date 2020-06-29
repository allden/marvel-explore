import React from 'react';
import LinkButton from './LinkButton';

function TextContainer(props) {
    // start is a boolean
    let {header, text, start, color, button} = props;
    start = start ? 'start' : 'end';

    const buttonElement = button ? <LinkButton color={color} header={header}/> : null;
    // text color can either be green orange violet or red
    return (
        <div className={`text-container ${start} text-${color} d-flex align-center flex-col`}>
            <h1>{header}</h1>
            <p className="text-dark">{text}</p>
            {buttonElement}
        </div>
    );
};

export default TextContainer;