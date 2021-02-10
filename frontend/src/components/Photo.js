import React from 'react';
import PropTypes from 'prop-types';
import './Photo.css'

// photo would return the photos that have such landmark
const Photo = (props) => {
    return (
        <div className="photo">
        {/* <button onClick={() => {props.onClickCallback(props.photo)}}>select</button> */}
        <img className="photo__content" src = {props.photo.photo_url} alt={props.photo.landmark} />
      </div>
    )
};
Photo.propTypes = {
    landmark: PropTypes.string.isRequired
};
export default Photo;
