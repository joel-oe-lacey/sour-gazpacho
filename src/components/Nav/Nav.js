import React from 'react';
import './Nav.scss';
import bloodSplatter from '../../assets/blood-splatter.png';

const Nav = () => {
    // need to conditionally render buttons based on route
    return (
        <nav className="nav">
            <button>Login</button>
            <h1>Sour Gazpacho</h1>
            <img src={bloodSplatter} alt='kill bill style blood splatter' id='blood-splatter'/>
        </nav>
    )
}

export default Nav;
