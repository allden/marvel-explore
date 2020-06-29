import React from 'react';

function Divider(props) {
    const {color, title} = props;
    const titleElement = title ? <h2>{title}</h2> : null;
    return (
        <div className={`divider divider-${color} d-flex align-center justify-center text-light`}>
            {titleElement}
        </div>
    );
};

export default Divider;