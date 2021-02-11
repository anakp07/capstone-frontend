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

    const calculateCenter = (photoList) => {
        let latitude = 0 
        let longitude = 0
        for (const photo of photoList) {
            latitude += photo.latitude 
            // console.log
            longitude += photo.longitude 
        }
        latitude /= photoList.length
        longitude/= photoList.length

        setCenter({lat:latitude , lng: longitude})
      // make sure that photo list insnt empty - make sure photo length isnt 0 
        
    }
    
    useEffect(() => {
        // console.log(props.formFields.country)
        // console.log(props.formFields.city)
        // console.log(props.formFields.state)
        axios.get(API_URL_BASE + '/searchlocation/' +  props.formFields.country + '/' + props.formFields.state + '/' + props.formFields.city)
            .then((response) => {
                setPhotoList(response.data)
                calculateCenter(response.data);  // find center here 
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }, [props.formFields]);
    


    const [center, setCenter] = useState({lat: 0,lng: 0});

    const [zoom, setZoom] = useState(11);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            {(photoList.length > 0)&& (
        <GoogleMapReact
            bootstrapURLKeys={{ apiKey: process.env.REACT_APP_API_KEY}}
            defaultCenter={center}
            defaultZoom={zoom}
            >
                {photoList.map((photo) => {
                    return (
                        <Marker
                            key={photo.photo_id}
                            lat={photo.latitude}
                            lng={photo.longitude}
                            name={photo.landmark}
                            color="blue"
                        />
                    )

                })}
                
        </GoogleMapReact>
            )}
        </div>
    );
}

export default MapView;