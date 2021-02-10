// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Photo from './Photo';
import PropTypes from 'prop-types';

const ListView = (props) => {
    const API_URL_BASE = 'http://localhost:3000/photos';

    const [photoList, setPhotoList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [landmarksNames, setLandmarksNames] = useState({});
    
    const landmarksNamesRetriever = (photoList) => {
      const newLandmarksNames = {};
      photoList.forEach((photo) => {
          newLandmarksNames[photo.landmark] = true
      }) 
      setLandmarksNames(newLandmarksNames);
    }

    useEffect(() => {
        axios.get(API_URL_BASE + '/searchlocation/' + props.formFields.country + '/' + props.formFields.state + '/' + props.formFields.city)
          .then((response) => {
            setPhotoList(response.data);
            landmarksNamesRetriever(response.data);
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
          
      }, [props.formFields]);
    
    //create a hash of the different landmarks for the retrieved city/state/country,
  
  
    
    

    console.log(landmarksNames)

    // create a loop that iterates through the hash landmarkNames and creates a row of photos for each landmark (by calling the Photo component, with a specific value, that value being the landmarkname the loop is on)
    const PhotoComponents = photoList.map((photo) => {
      return (< Photo
            key={photo.photo_id}
            photo={photo}
            onClickCallback={props.selectPhotoCallback}
            // pass in the landmark name we are on in the loop
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
