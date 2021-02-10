// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Photo from './unusedPhoto';
import PropTypes from 'prop-types';

const ListView = (props) => {
    const API_URL_BASE = 'http://localhost:3000/photos';

    const [photoList, setPhotoList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [landmarksNames, setLandmarksNames] = useState({});
    
    const landmarksNamesRetriever = (photoList) => {
      const newLandmarksNames = {};
      photoList.forEach((photo) => {
        if (!newLandmarksNames[photo.landmark]){
          newLandmarksNames[photo.landmark] = []
        }
        newLandmarksNames[photo.landmark].push(<img key = {photo.photo_id} className="photo__content" src = {photo.photo_url} alt={photo.landmark} />)
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



    // create a loop that iterates through the hash landmarkNames and creates a row of photos for each landmark (by calling the Photo component, with a specific value, that value being the landmarkname the loop is on)

    // const PhotoComponents = photoList.map((photo) => {
    //   return (< Photo
    //         key={photo.photo_id}
    //         photo={photo}
    //         onClickCallback={props.selectPhotoCallback}
    //         // pass in the landmark name we are on in the loop
    //         />)
    //     })  
    
    const rows = []

    for (const landmark in landmarksNames){
      const listImages = landmarksNames[landmark]
      rows.push(
        <div key = {landmark}>
          <p>{landmark}</p>
          <div>{listImages}</div>
        </div>
      )
    }

    return (
        <div className="ListView">
        <h3>ListView page</h3>
        {errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : ''}
        {/* {PhotoComponents} */}
        {rows}
        </div>
    )
};

Photo.propTypes = {
    selectPhotoCallback: PropTypes.func.isRequired
}

export default ListView;
