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

  return (
    <div>
      <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/"/>
          <Route path="/home"><Home/></Route>
          <Route path="/locationsearch"><LocationSearch formFields={formFields} setFormFields={setFormFields}/></Route>
          <Route path="/login"><Login/></Route>
        </Switch>
      </div>
    </Router>
    You have selected {formFields.city}, {formFields.state}, {formFields.country}.

    </div>
    
  );
}

export default App;
