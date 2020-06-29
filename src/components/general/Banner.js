import React from 'react';
import TextContainer from './TextContainer';
import Divider from './Divider';

function Banner(props) {
    const {color, name, start, header, text, button=true} = props;

    // the header will be converted to lowercase for the href
    return (
        <div className="d-flex flex-col flex-grow-1">
            <div className={`banner ${name}`}>
                <TextContainer 
                    color={color}
                    start={start} 
                    header={header}
                    text={text}
                    button={button}
                />
            </div>
            <Divider color={color} />
        </div>
    );
};

export default Banner;