import React, { useState } from 'react';
import LocationSearchForm from './LocationSearchForm';
import ListView from './ListView';
import MapView from './MapView' ;

const LocationSearch = (props) => {
    
  const isSearchComplete = (formFields) => {
    if(formFields.country === '' || formFields.state === '' || formFields.city === ''){
      return false
    }
    else{
      return true
    }
  }

  return(
      <div>
        <LocationSearchForm formFields={props.formFields} setFormFields={props.setFormFields}/> 
        {/* <LocationSearchForm isLocationSubmitted={props.isLocationSubmitted} setLocation={props.setLocation} formFields={props.formFields} setFormFields={props.setFormFields}/>  */}
        {isSearchComplete(props.formFields) && (
        <> 
        <ListView formFields={props.formFields}/>
        <MapView formFields={props.formFields}/>
        </>
        )
      }
      </div>   
    )
};

export default LocationSearch;