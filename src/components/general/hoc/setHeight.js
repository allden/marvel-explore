import React from 'react';

function SetHeight(props) {
    const {wrappedComponent, height} = props;
    return (
        <div className="d-flex" style={{height}}>
            {wrappedComponent}
        </div>
    );
};

export default SetHeight;