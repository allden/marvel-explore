import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavList from './NavList';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            active: false
        }
    };

    onClickHandler = () => {
        const {active} = this.state;

        this.setState({
            active: !active
        });
    };
    
    render() {
        const {active} = this.state;

        return (
            <nav className="navbar">
                <Link to="/"><p className="bold"><span className="marvel-logo">MARVEL</span> Explore</p></Link>
                <div className="menu" onClick={this.onClickHandler}>
                    <div className="hamburger-line"></div>
                </div>
                <NavList active={active}/>
            </nav>
        );
    };
};

export default Nav;