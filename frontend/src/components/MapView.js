// import React from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//     width: '100%',
//     height: '100%',
//   };

// const MapView = (props) => {

//     return (
//         <div> 
//             <h3>MapView page</h3>
//             <Map
//                 google={props.google}
//                 zoom={8}
//                 style={mapStyles}
//                 initialCenter={{ lat: 47.444, lng: -122.176}}
//                 />
//         </div>
//         );
//     };

//     export default GoogleApiWrapper({
//         apiKey: 'AIzaSyBv3w3sBv8bZQac_QyYWfcBx0rQmcVvk-U'
//       })(MapView);

// // export default MapView;


import React, { useState,useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import axios from "axios";



const MapView = (props) => {
    const API_URL_BASE = 'http://localhost:3000/photos';

    const [photoList,setPhotoList] = useState([]);
    const [errorMessage,setErrorMessage] = useState(null);
    const [landmarksNames,setLandmarksNames] = useState({});

    const landmarksNamesRetriever = (photoList) => {
        const newLandmarkskNames = {};
        photoList.forEach((photo) => {
            if (!newLandmarkskNames[photo.landmark]){
                newLandmarkskNames[photo.landmark]= []
            }
            setLandmarksNames(newLandmarkskNames)
        });
    }

    useEffect(() => {
        console.log(props.formFields.country)
        console.log(props.formFields.city)
        console.log(props.formFields.state)
        axios.get(API_URL_BASE + '/searchlocation/' +  props.formFields.country + '/' + props.formFields.state + '/' + props.formFields.city)
            .then((response) => {
                setPhotoList(response.data)
                landmarksNamesRetriever(response.data);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }, [props.formFields]);


    const [center, setCenter] = useState({lat: props.latitude, lng: props.longitude });

    const [zoom, setZoom] = useState(11);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ apiKey: process.env.REACT_APP_API_KEY}}
            defaultCenter={center}
            defaultZoom={zoom}
            >
    
        </GoogleMapReact>
        </div>
    );
}

export default MapView;