import React, { useState,useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import axios from "axios";
import './MapView.css';

const MapView = (props) => {
    const API_URL_BASE = 'http://localhost:3000/photos';

    const [photoList,setPhotoList] = useState([]);
    const [errorMessage,setErrorMessage] = useState(null);
    const [landmarksNames, setLandmarksNames] = useState({});

    const landmarksNamesRetriever = (photoList) => {
      const newLandmarksNames = {};
      photoList.forEach((photo) => {
        if (!newLandmarksNames[photo.landmark]){
          newLandmarksNames[photo.landmark] = []
        }
        if(!newLandmarksNames[photo.landmark].includes(photo.perspective)){
            newLandmarksNames[photo.landmark].push(photo.perspective)
        }
      }) 
      setLandmarksNames(newLandmarksNames);
    }

    const rows = []

    for (const landmark in landmarksNames){
        const listPerspectives = landmarksNames[landmark]
        rows.push(
          <div key = {landmark}>
            <table>
               <tr className="flex-container">
                <td className="landmarkNameAndLinkContainer">
                 <div className="landmarkName">{landmark}</div>
                </td>
               {/* <td className="flex-item-right">{listPerspectives}</td> */}
               <td>
               <ul>
                {listPerspectives.map(perspective =>
                // <li><p className="landmarkName" onMouseOver={updatePerspectiveSelectedByHovering(perspective)} className={ props.selectedPerspective === perspective ? "selected" : "notSelected"}>{perspective}</p></li>
                <li><p className="landmarkName" onMouseOver={() => updatePerspectiveSelectedByHovering(perspective)} className={ props.selectedPerspective === perspective ? "selected" : "notSelected"}>{perspective}</p></li>

                )}
            </ul> 
               </td>
              </tr> 
            </table>
          </div>
        )
      }

    const calculateCenter = (photoList) => {
        let latitude = 0 
        let longitude = 0
        for (const photo of photoList) {
            latitude += photo.latitude 
            longitude += photo.longitude 
        }
        latitude /= photoList.length
        longitude/= photoList.length

        setCenter({lat:latitude , lng: longitude})
      // make sure that photo list insnt empty - make sure photo length isnt 0 
        
    }
    
    useEffect(() => {
        axios.get(API_URL_BASE + '/searchlocation/' +  props.formFields.country + '/' + props.formFields.state + '/' + props.formFields.city)
            .then((response) => {
                setPhotoList(response.data)
                calculateCenter(response.data);  // find center here 
                landmarksNamesRetriever(response.data);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }, [props.formFields]);
    
    const [center, setCenter] = useState({lat: 0,lng: 0});

    const [zoom, setZoom] = useState(14);

    function updatePerspectiveSelectedByHovering(selection){
        props.setSelectedPerspective(selection)
      }

    return (
        <div className="flexbox-wrap-container">
            <div className="flexbox-left"> <h3>List View Perspectives</h3>
            {/* <ul>
                {photoList.map(photo =>  
                <li>Photo ID: {photo.photo_id} Perspective: {photo.perspective}</li>
                )};
            </ul> */}
            {rows}

            </div>
            <div className="flexbox-right"> <h3>Map View Perspectives</h3>
                {(photoList.length > 0)&& (
                <GoogleMapReact
                    bootstrapURLKeys={{ apiKey: process.env.REACT_APP_API_KEY}}
                    defaultCenter={center}
                    defaultZoom={zoom}
                    >
                        {photoList.map((photo) => {
                            // console.log(photo)
                            return (
                                <Marker
                                    key={photo.photo_id}
                                    lat={photo.latitude}
                                    lng={photo.longitude}
                                    landmark={photo.landmark}
                                    perspective={photo.perspective}
                                    // onMouseOver={() => updatePerspectiveSelectedByHovering(photo.perspective)}
                                    onMouseOver={() => updatePerspectiveSelectedByHovering(photo.perspective)}
                                    color={ (props.selectedPerspective === photo.perspective) ? "yellow" : "#DD2476"}

                                />
                            )
                        })}           
                </GoogleMapReact>
                    )}
            </div>
        </div>
    );
}

export default MapView;

// <h4> Arc de Triomphe</h4>
            // <ul>
            //     <li> Avenue-de-la-Grande-Armee</li>
            //     <li> Champs-Elysees</li>
            //     <li> Place-du-General-Brocard</li>
            // </ul> 