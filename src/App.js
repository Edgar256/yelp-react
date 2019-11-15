import React from 'react';
import {BrowserRouter as Router, 
          Route,
          Switch,
          Link
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RestaurantsListing from './pages/RestaurantsListing';
import Error from './pages/Error';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" component={Home} exact />
					<Route path="/restaurants" component={RestaurantsListing} />
          <Route component={Error} />
        </Switch>

    </Router>
  );
}

export default App;
