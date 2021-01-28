// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import LocationSearch from './components/LocationSearch';
import Nav from './components/Nav';

function App() {
  const [formFields, setFormFields] = useState({
    country: '',
    state: '',
    city: '',
  })

  const [locationIsSubmitted, setLocation] = useState(false)

  return (
    <div>
      <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/"/>
          <Route path="/home"><Home/></Route>
          <Route path="/locationsearch"><LocationSearch locationIsSubtmitted={locationIsSubmitted} formFields={formFields} setFormFields={setFormFields}/></Route>
          <Route path="/login"><Login/></Route>
        </Switch>
        {locationIsSubmitted || Results for: {formFields.city}, {formFields.state}, {formFields.country}}
      </div>
    </Router>
    You have selected {formFields.city}, {formFields.state}, {formFields.country}.

    </div>
    
  );
}

export default App;
