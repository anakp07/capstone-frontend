import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
  };

const MapView = (props) => {

    return (
        <div> 
            <h3>MapView page</h3>
            <Map
                google={props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
                />
        </div>
        );
    };

    export default GoogleApiWrapper({
        apiKey: 'AIzaSyBv3w3sBv8bZQac_QyYWfcBx0rQmcVvk-U'
      })(MapView);

// export default MapView;
