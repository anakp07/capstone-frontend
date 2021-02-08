import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

const Nav = () => {
return (
    <nav>
    <h3>Instagrammable Spots</h3>
        <ul className="nav-links">
            <li>
                <Link to="/home" className="nav-text">Home</Link>
            </li>
            <li>
                <Link to="/locationsearch" className="nav-text">Location Search</Link>
            </li>
            <li>
                <Link to="/login" className="nav-text">Login</Link>
            </li>
            <li>
                <Link to="/addpicture" className="nav-text">Add a Picture</Link>
            </li>
            <li>
                <Link to="/listview" className="nav-text">ListView</Link>
            </li>
        </ul>
    </nav>
);
};
export default Nav;















