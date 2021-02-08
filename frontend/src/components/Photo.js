import React from 'react';
import PropTypes from 'prop-types';
import './Photo.css'

const Photo = (props) => {
    return (
        <div className="photo">
        <button onClick={() => {props.onClickCallback(props.photo)}}>select</button>
        <h3 className="photo__content">{props.photo.landmark}</h3>
      </div>
    )
};
Photo.propTypes = {
    landmark: PropTypes.string.isRequired
};
export default Photo;
