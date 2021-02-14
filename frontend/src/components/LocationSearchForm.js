
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

const updateSelectedView= (selectedView) => {
  props.setView(selectedView);
}
  return (
    <div>
      <h5>Please fill in your current location:</h5>
      <form onSubmit={onSubmission}>
      <p><input 
      placeholder="Country"
      type="text"
      name="country"
      onChange={onInput}
      value={updatedFormFields.country}
      />
      </p>
      <p>
       <input 
      placeholder="State or Department"
      type="text"
      name="state"
      onChange={onInput}
      value={updatedFormFields.state}
      /> 
      </p>
      <p>
       <input 
      placeholder="City"
      type="text"
      name="city"
      onChange={onInput}
      value={updatedFormFields.city}
      />
      </p>
      {/* <div className="flex-container"> */}
       <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Search by List" onClick={() => updateSelectedView('list')} className="PlayerSubmissionForm__submit-btn"/>
          {/* <input type="submit" value="Search by List" className="PlayerSubmissionForm__submit-btn" setLocation='true'/> */}
      </div>
      <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Search by Map" onClick={() => updateSelectedView('map')} className="PlayerSubmissionForm__submit-btn"/>
          {/* <input type="submit" value="Search by List" className="PlayerSubmissionForm__submit-btn" setLocation='true'/> */}
      </div> 
      {/* </div> */}
      
      </form>

      
    </div>
    
  )
}


export default LocationSearchForm;