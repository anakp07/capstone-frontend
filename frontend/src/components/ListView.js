import React, { useState, useEffect } from 'react';
import axios from "axios";
import Photo from './unusedPhoto';
import PropTypes from 'prop-types';
import './ListView.css';
import {Link} from 'react-router-dom';


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
        if (newLandmarksNames[photo.landmark].length < 5){
        newLandmarksNames[photo.landmark].push(<img key = {photo.photo_id} src = {photo.photo_url} alt={photo.landmark} />)
        }
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
    
    const rows = []

    for (const landmark in landmarksNames){
      const listImages = landmarksNames[landmark]
      rows.push(
        <div key = {landmark}>
          <table>
            <tbody>
             <tr className="flex-container">
             <td className="flex-item-left"><Link to="/listperspectiveview" className="landmarkName">{landmark}</Link></td> 
             <td className="flex-item-right">{listImages}</td>
            </tr> 
            </tbody>
            
          </table>
        </div>
      )
    }


    // const PhotoComponents = photoList.map((photo) => {
    //   return (< Photo
    //         key={photo.photo_id}
    //         photo={photo}
    //         onClickCallback={props.selectPhotoCallback}
    //         // pass in the landmark name we are on in the loop
    //         />)
    //     })  

    return (
        <div className="ListView">
        <p>List View - Results for {props.formFields.city}, {props.formFields.state}, {props.formFields.country}:</p>
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
