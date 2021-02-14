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
                <h4><Link to="/home" className="nav-text">Home</Link></h4>
            </li>
            <li>
                <h4><Link to="/locationsearch" className="nav-text">Location Search</Link></h4>
            </li>
            <li>
                <h4><Link to="/addpicture" className="nav-text">Add a Picture</Link></h4>
            </li>
            <li>
                <h4 className="location">{isSearchComplete(props.formFields) && `Location: ${props.formFields.city}, ${props.formFields.state}, ${props.formFields.country}`}</h4>
            </li>
            <li>
                <h4>{isSearchComplete(props.formFields) && <Link to="/listview" className="nav-text">ListView</Link>}</h4>
            </li>
            <li>
                <h4>{isSearchComplete(props.formFields) && <Link to="/mapview" className="nav-text">MapView</Link>}</h4>
            </li>
            <li>
                <h4><Link to="/login" className="nav-text">Login</Link></h4>
            </li>
            
            
        </ul>
    </nav>
);
};
export default Nav;















