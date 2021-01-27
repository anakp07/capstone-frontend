
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LocationSearchForm.css';

const LocationSearchForm = () => {
  const [formFields, setFormFields] = useState({
    country: '',
    state: '',
    city: '',
  })
  return (
    <div>
      <p>Please fill in your current location:</p>
      <p><input 
      placeholder="country"
      type="text"
      name="country"
      value={formFields.country}/>
      </p>
      <p>
       <input 
      placeholder="state"
      type="text"
      name="state"
      value={formFields.state}/> 
      </p>
      <p>
       <input 
      placeholder="city"
      type="text"
      name="city"
      value={formFields.city}/> 
      </p>
    </div>
    
  )
}

export default LocationSearchForm;