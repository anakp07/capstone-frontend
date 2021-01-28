import React, { useState } from 'react';
import LocationSearchForm from './LocationSearchForm';

const LocationSearch = (props) => {
    return(
      <div>
        <LocationSearchForm formFields={props.formFields} setFormFields={props.setFormFields}/> 
      </div>   
    )
};

export default LocationSearch;