import React from 'react';
import {NavLink} from 'react-router-dom';

function NavList(props) {
    const {active} = props;

    return active ? (<ul className="nav scaleY-1">
            <li className="nav-item border-bottom border-red"><NavLink className="nav-link" exact to="/characters">Characters</NavLink></li>
            <li className="nav-item border-bottom border-orange"><NavLink className="nav-link" exact to="/series">Series</NavLink></li>
            <li className="nav-item border-bottom border-green"><NavLink className="nav-link" exact to="/comics">Comics</NavLink></li>
            <li className="nav-item border-bottom border-violet"><NavLink className="nav-link" exact to="/creators">Creators</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" exact to="/">Home</NavLink></li>
        </ul>) : <ul className="nav scaleY-0">
            <li className="nav-item border-bottom border-red"><NavLink className="nav-link" exact to="/characters">Characters</NavLink></li>
            <li className="nav-item border-bottom border-orange"><NavLink className="nav-link" exact to="/series">Series</NavLink></li>
            <li className="nav-item border-bottom border-green"><NavLink className="nav-link" exact to="/comics">Comics</NavLink></li>
            <li className="nav-item border-bottom border-violet"><NavLink className="nav-link" exact to="/creators">Creators</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" exact to="/">Home</NavLink></li>
        </ul>;
};

export default NavList;