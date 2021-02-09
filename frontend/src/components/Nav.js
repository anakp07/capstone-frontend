import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

const Nav = (props) => {

    const isSearchComplete = (formFields) => {
        if(formFields.country === '' || formFields.state === '' || formFields.city === ''){
          return false
        }
        else{
          return true
        }
      }

return (
    <nav>
    <h3>Instagrammable Spots</h3>
        <ul className="nav-links">
            <li>
                <p><Link to="/home" className="nav-text">Home</Link></p>
            </li>
            <li>
                <p><Link to="/locationsearch" className="nav-text">Location Search</Link></p>
            </li>
            <li>
                <p><Link to="/login" className="nav-text">Login</Link></p>
            </li>
            <li>
                <p><Link to="/addpicture" className="nav-text">Add a Picture</Link></p>
            </li>
            <li>
                <p>{isSearchComplete(props.formFields) && `Location: ${props.formFields.city}, ${props.formFields.state}, ${props.formFields.country}`}</p>
            </li>
            <li>
                <p><Link to="/listview" className="nav-text">ListView</Link></p>
            </li>
            
        </ul>
    </nav>
);
};
export default Nav;















