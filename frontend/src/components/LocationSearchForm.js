
import React, { useState } from 'react';
import './LocationSearchForm.css';

const LocationSearchForm = (props) => {
  const [updatedFormFields, setUpdatedFormFields] = useState({
    country: '',
    state: '',
    city: '',
  })

  const onInput = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    const newFormFields = {
      ...updatedFormFields,
    }
    newFormFields[key] = value;
    setUpdatedFormFields(newFormFields);
  }
  
  const onSubmission = (event) => {
    event.preventDefault();
    props.setFormFields(updatedFormFields);

}
  
  return (
    <div>
      <p>Please fill in your current location:</p>
      <form onSubmit={onSubmission}>
      <p><input 
      placeholder="country"
      type="text"
      name="country"
      onChange={onInput}
      value={updatedFormFields.country}
      />
      </p>
      <p>
       <input 
      placeholder="state or department"
      type="text"
      name="state"
      onChange={onInput}
      value={updatedFormFields.state}
      /> 
      </p>
      <p>
       <input 
      placeholder="city"
      type="text"
      name="city"
      onChange={onInput}
      value={updatedFormFields.city}
      />
      </p>
      <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Search by List" className="PlayerSubmissionForm__submit-btn"/>
          {/* <input type="submit" value="Search by List" className="PlayerSubmissionForm__submit-btn" setLocation='true'/> */}

      </div>
      </form>

      
    </div>
    
  )
}


export default LocationSearchForm;