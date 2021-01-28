
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LocationSearchForm.css';

const LocationSearchForm = (props) => {
  
  const onInput = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    const newFormFields = {
      ...props.formFields,
    }
    newFormFields[key] = value;
    props.setFormFields(newFormFields);
  }
  
  return (
    <div>
      <p>Please fill in your current location:</p>
      <form>
      <p><input 
      placeholder="country"
      type="text"
      name="country"
      //value={"fake value"}
      onChange={onInput}
      value={props.formFields.country}
      />
      {/* <button onClick={helperFunction}>Submit Country</button> */}
      </p>
      <p>
       <input 
      placeholder="state or department"
      type="text"
      name="state"
      //value={formFields.state}
      /> 
      </p>
      <p>
       <input 
      placeholder="city"
      type="text"
      name="city"
      //value={formFields.city}
      /> 
      </p>
      </form>
      
      
    </div>
    
  )
}

export default LocationSearchForm;