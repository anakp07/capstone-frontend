import React, { useState } from 'react';
import LocationSearchForm from './LocationSearchForm';
import ListView from './ListView';
import MapView from './MapView';

const LocationSearch = (props) => {
    
  const isSearchComplete = (formFields) => {
    if(formFields.country === '' || formFields.state === '' || formFields.city === ''){
      return false
    }
    else{
      return true
    }
  }

  const[view,setView] = useState('');

  return(
      <div>
        <LocationSearchForm view={view} setView={setView} formFields={props.formFields} setFormFields={props.setFormFields}/> 
        {/* <LocationSearchForm isLocationSubmitted={props.isLocationSubmitted} setLocation={props.setLocation} formFields={props.formFields} setFormFields={props.setFormFields}/>  */}
        {(isSearchComplete(props.formFields) && view === 'list') && <ListView formFields={props.formFields} selectedLandmark={props.selectedLandmark} setSelectedLandmark={props.setSelectedLandmark}/> }
        {(isSearchComplete(props.formFields) && view === 'map') && <MapView formFields={props.formFields} selectedLandmark={props.selectedLandmark} setSelectedLandmark={props.setSelectedLandmark} selectedPerspective={props.selectedPerspective} setSelectedPerspective={props.setSelectedPerspective}/> }

      </div>   
    )
};

export default LocationSearch;