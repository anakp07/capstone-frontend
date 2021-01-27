
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
    <input 
    placeholder="country"
    type="text"
    name="country"
    value={formFields.country}/>
    <input 
    placeholder="state"
    type="text"
    name="state"
    value={formFields.state}/>
    <input 
    placeholder="city"
    type="text"
    name="city"
    value={formFields.city}/>
    </div>
    
  )
}

export default LocationSearchForm;