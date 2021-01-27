import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

const Nav = () => {
return (
    <nav>
    <h3>Instagrammable Spots</h3>
        <ul className="nav-links">
            <li className="nav-text">
                <Link to="/home">Home</Link>
            </li>
            <li className="nav-text">
                <Link to="/login">Login</Link>
            </li>
            <li className="nav-text">
                <Link to="/locationsearch">Location Search</Link>
            </li> 
        </ul>
    </nav>
);
};
export default Nav;















