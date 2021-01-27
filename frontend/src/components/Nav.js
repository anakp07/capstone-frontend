import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

const Nav = () => {
return (
    <nav>
    <h3>Instagrammable Spots</h3>
        <ul className="nav-links">
        <Link to="/home">
            <li className="nav-text">Home</li>
        </Link>
        <Link to="/login">
            <li className="nav-text">Login</li>
        </Link>
        <Link to="/LocationSearch">
            <li className="nav-text">Location Search</li>
        </Link>
        </ul>
    </nav>
);
};
export default Nav;















