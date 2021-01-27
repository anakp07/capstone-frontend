import React, { useState } from 'react';
import './LocationSearchForm';

const LocationSearch = () => {
    // return(
    //   <div>
    //     <LocationSearchForm /> 
    //   </div>
        
        
    // )
    const [formFields, setFormFields] = useState({
      country: '',
      state: '',
      city: '',
    })
    return (
      <div>
      <form>
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
      </form>
      </div>
      
    )
};

export default LocationSearch;