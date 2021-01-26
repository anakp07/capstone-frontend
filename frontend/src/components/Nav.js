import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

const Nav = () => {
return (
    <nav>
    <h3>Instagrammable Spots</h3>
        <ul>
        <Link to="/home">
            <li>Home</li>
        </Link>
        <Link to="/login">
            <li>Login</li>
        </Link>
        <Link to="/LocationSearch">
            <li>Location Search</li>
        </Link>
        </ul>
    </nav>
);
};
export default Nav;















