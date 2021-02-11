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
import MapView from './components/MapView';
import ListPerspectiveView from './components/ListPerspectiveView';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
// import {ToastContainer} from "react-toastify";

function App() {
  const [formFields, setFormFields] = useState({
    country: '',
    state: '',
    city: '',
  })

  const [selectedLandmark, setSelectedLandmark] = useState({
    landmark: ''
    // latitude: '',
    // longitude: '',
  })

  // const [locationIsSubmitted, setLocation] = useState(false)

  return (
    <div>
      <Router>
      <div>
        <Nav formFields={formFields}/>
        <Switch>
          <Route exact path="/"/>
          <Route path="/home"><Home/></Route>
          <Route path="/locationsearch"><LocationSearch formFields={formFields} setFormFields={setFormFields}/></Route>
          {/* <Route path="/locationsearch"><LocationSearch locationIsSubtmitted={locationIsSubmitted} setLocation={setLocation} formFields={formFields} setFormFields={setFormFields}/></Route> */}
          <Route path="/login"><Login/></Route>
          <Route path="/addpicture"><AddPicture/></Route>
          <Route path="/listview"><ListView formFields={formFields}/></Route>
          <Route path="/mapview"><MapView formFields={formFields}/></Route>
          <Route path="/listperspectiveview"><ListPerspectiveView formFields={formFields} selectedLandmark={selectedLandmark}/></Route>

        </Switch>
        {/* {locationIsSubmitted && {formFields.country}} */}
      </div>
    </Router>
    {/* You have selected {formFields.city}, {formFields.state}, {formFields.country}. */}
    </div>
    
  );
}

export default App;
