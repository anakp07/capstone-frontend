// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import LocationSearch from './components/LocationSearch';
import Nav from './components/Nav';
import AddPicture from './components/AddPicture';
import ListView from './components/ListView';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
// import {ToastContainer} from "react-toastify";


function App() {
  const [formFields, setFormFields] = useState({
    country: '',
    state: '',
    city: '',
  })

  // const [locationIsSubmitted, setLocation] = useState(false)

  return (
    <div>
      <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/"/>
          <Route path="/home"><Home/></Route>
          <Route path="/locationsearch"><LocationSearch formFields={formFields} setFormFields={setFormFields}/></Route>
          {/* <Route path="/locationsearch"><LocationSearch locationIsSubtmitted={locationIsSubmitted} setLocation={setLocation} formFields={formFields} setFormFields={setFormFields}/></Route> */}
          <Route path="/login"><Login/></Route>
          <Route path="/addpicture"><AddPicture/></Route>
          <Route path="/listview"><ListView/></Route>
        </Switch>
        {/* {locationIsSubmitted && {formFields.country}} */}
      </div>
    </Router>
    {/* You have selected {formFields.city}, {formFields.state}, {formFields.country}. */}
    </div>
    
  );
}

export default App;
