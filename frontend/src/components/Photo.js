import React from 'react';
import PropTypes from 'prop-types';
import './Photo.css'

const Photo = (props) => {
    return (
        <div className="photo">
        {/* <button onClick={() => {props.onClickCallback(props.photo)}}>select</button> */}
        {/* <h3 className="photo__content">{props.photo.photo_url}</h3> */}
        <img src = {props.photo.photo_url} alt = 'photo' />
        {/* <img src = 'https://ig-pics.s3-us-west-1.amazonaws.com/1.jpeg' alt = 'photo' /> */}

        {/* <img src = 'http://www.sarepa.com/wp-content/uploads/2015/11/el-penol-guatape.jpg' alt='guatape' />
        <img src = {props.photo.photo_url} alt = '' /> */}
      
      </div>
    )
};
Photo.propTypes = {
    landmark: PropTypes.string.isRequired
};
export default Photo;
