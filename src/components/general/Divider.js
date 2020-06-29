import React from 'react';

function Divider(props) {
    const {color} = props;
    return (
        <div className={`divider divider-${color}`}>

        </div>
    );
};

export default Divider;