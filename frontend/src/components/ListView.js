// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Photo from './Photo';
import PropTypes from 'prop-types';

const ListView = (props) => {
    const API_URL_BASE = 'http://localhost:3000/photos';

    const [photoList, setPhotoList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        axios.get(API_URL_BASE + '/searchlocation/' + props.formFields.country + '/' + props.formFields.state + '/' + props.formFields.city)
          .then((response) => {
            setPhotoList(response.data);
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      }, [props.formFields]);

    const PhotoComponents = photoList.map((photo) => {
        return (< Photo
            key={photo.photo_id}
            photo={photo}
            onClickCallback={props.selectPhotoCallback}
            />)
        })  

    return (
        <div className="ListView">
        <h3>ListView page</h3>
        {errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : ''}
        {PhotoComponents}
        </div>
    )
};

Photo.propTypes = {
    selectPhotoCallback: PropTypes.func.isRequired
}

export default ListView;
