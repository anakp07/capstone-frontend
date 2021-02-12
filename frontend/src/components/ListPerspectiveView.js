import React, { useState, useEffect } from 'react';
import axios from "axios";
// import PropTypes from 'prop-types';
import './ListPerspectiveView.css';

const ListPerspectiveView = (props) => {
    const API_URL_BASE = 'http://localhost:3000/photos';


    console.log("list perspective props:" ,props)
    
    const [photoList, setPhotoList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [perspectives, setPerspectives] = useState({});
    // const [selectedLandmark, setSelectedLandmark] = useState(props.selectedLandmark);
    
    // const perspectivesRetriever = (photoList, props.selectedLandmark) => {
    //   const newPerspectives = {};
    //   photoList.forEach((photo) => {
    //     if (photo.landmark === props.selectedLandmark.landmark && !newPerspectives[photo.perspective]){
    //       newPerspectives[photo.perspective] = []
    //     }
    //     if (photo.landmark === props.selectedLandmark.landmark && newPerspectives[photo.perspective].length < 5){
    //     newPerspectives[photo.perspective].push(<img key = {photo.photo_id} src = {photo.photo_url} alt={photo.perspective} />)
    //     }
    //   }) 
    //   setPerspectives(newPerspectives);
    // }

    const perspectivesRetriever = (photoList) => {
      const newPerspectives = {};
      photoList.forEach((photo) => {
        if (photo.landmark === props.selectedLandmark.landmark && !newPerspectives[photo.perspective]){
          newPerspectives[photo.perspective] = []
        }
        if (photo.landmark === props.selectedLandmark.landmark && newPerspectives[photo.perspective].length < 5){
        newPerspectives[photo.perspective].push(<img key = {photo.photo_id} src = {photo.photo_url} alt={photo.perspective} />)
        }
      }) 
      setPerspectives(newPerspectives);
    }

    // useEffect(() => {
    //     axios.get(API_URL_BASE + '/searchlocation/' + props.formFields.country + '/' + props.formFields.state + '/' + props.formFields.city)
    //       .then((response) => {
    //         setPhotoList(response.data);
    //         perspectivesRetriever(response.data);
    //       })
    //       .catch((error) => {
    //         setErrorMessage(error.message);
    //       });
          
    //   }, [props.formFields]);
    useEffect(() => {
      axios.get(API_URL_BASE + '/searchlocation/' + props.formFields.country + '/' + props.formFields.state + '/' + props.formFields.city)
        .then((response) => {
          setPhotoList(response.data);
          // perspectivesRetriever(response.data, props.selectedLandmark);
          perspectivesRetriever(response.data);

        })
        .catch((error) => {
          console.log(error)
          setErrorMessage(error.message);
        });
        
    }, [props.formFields]);
    
    const rows = []

    for (const perspective in perspectives){
      const listImages = perspectives[perspective]
      rows.push(
        <div key = {perspective}>
          <table>
            <tr class="flex-container">
             <td className="perspectiveNameandLinkContainer">
               <div className="perspectiveName">
                {perspective}
                </div>
              </td> 
             <td className="flex-item-right">{listImages}</td>
            </tr>
          </table>
        </div>
      )
    }

    return (
        <div className="ListView">
        {/* <h3>List View</h3> */}
        {errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : ''}
        {rows}
        </div>
    )
};

export default ListPerspectiveView;
