import React, { useState, useEffect } from 'react';
import axios from "axios";
import './ListPerspectiveView.css';
import {Link} from 'react-router-dom';

const ListPerspectiveView = (props) => {
    const API_URL_BASE = 'http://localhost:3000/photos';


    console.log("list perspective props:" ,props)
    
    const [photoList, setPhotoList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [perspectives, setPerspectives] = useState({});

    const perspectivesRetriever = (photoList) => {
      const newPerspectives = {};
      photoList.forEach((photo) => {
        if (photo.landmark === props.selectedLandmark.landmark && !newPerspectives[photo.perspective]){
          newPerspectives[photo.perspective] = []
        }
        if (photo.landmark === props.selectedLandmark.landmark && newPerspectives[photo.perspective].length < 3){
        newPerspectives[photo.perspective].push(<img key = {photo.photo_id} src = {photo.photo_url} alt={photo.perspective} />)
        }
      }) 
      setPerspectives(newPerspectives);
    }

    useEffect(() => {
      axios.get(API_URL_BASE + '/searchlocation/' + props.formFields.country + '/' + props.formFields.state + '/' + props.formFields.city)
        .then((response) => {
          setPhotoList(response.data);
          perspectivesRetriever(response.data);

        })
        .catch((error) => {
          console.log(error)
          setErrorMessage(error.message);
        });
        
    }, [props.formFields]);
    
    const rows = []
    const updateSelectedPerspective= (perspectiveName) => {
      props.setSelectedPerspective(perspectiveName)
    }

    for (const perspective in perspectives){
      const listImages = perspectives[perspective]
      rows.push(
        <div key = {perspective}>
        
            <div className="flex-container">
             <div className="perspectiveNameAndLinkContainer">
               <div className="perspectiveName">{perspective}</div>
                <div onClick={() => updateSelectedPerspective(perspective)}><Link to="/mapview" className="link" > Click to see it on the map!</Link></div> 
              </div> 
             <div className="flex-item-right">{listImages}</div>
            </div>
         
        </div>
      )
    }

    return (
        <div className="ListView">
        {errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : ''}
        {rows}
        </div>
    )
};

export default ListPerspectiveView;
