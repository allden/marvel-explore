import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/characters">Characters</NavLink> 
                <NavLink to="/series">Series</NavLink>
                <NavLink to="/comics">Comics</NavLink>
                <NavLink to="/creators">Creators</NavLink>
            </ul>
        </nav>
    );
};

export default Nav;