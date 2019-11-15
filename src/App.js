import React from 'react';
import {BrowserRouter as Router, 
          Route,
          Switch,
          Link
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RestaurantsListing from './pages/RestaurantsListing';
import ShoppingListing from './pages/ShoppingListing';
import NightLifeListing from './pages/NightLifeListing';
import ActiveLifeListing from './pages/ActiveLifeListing';
import BeautySpasListing from './pages/BeautySpasListing';
import AutomotiveListing from './pages/AutomotiveListing';
import HomeServicesListing from './pages/HomeServicesListing';
import Error from './pages/Error';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" component={Home} exact />
					<Route path="/restaurants" component={RestaurantsListing} />
          <Route path="/shopping" component={ShoppingListing} />
          <Route path="/night-life" component={NightLifeListing} />
          <Route path="/active-life" component={ActiveLifeListing} />
          <Route path="/beauty-spas" component={BeautySpasListing} />
          <Route path="/automotive" component={AutomotiveListing} />
          <Route path="/home-services" component={HomeServicesListing} />
          <Route component={Error} />
        </Switch>
    </Router>
  );
}

export default App;
