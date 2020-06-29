import React from 'react';
import {Link} from 'react-router-dom';

function LinkButton(props) {
    const {color, header} = props;
    const to = header.toLowerCase();

    return (
        <Link to={to} className={`btn btn-${color}`}>
            {`Explore ${header}`}
        </Link>
    );
};

export default LinkButton;