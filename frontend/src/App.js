// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import LocationSearch from './components/LocationSearchForm';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>

          <Route path="/"/>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/locationsearch">
            <LocationSearch/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
