import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RestaurantsListing from './pages/RestaurantsListing';

function App() {
  return (
    <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact />
					<Route path='restaurants' component={RestaurantsListing} />
        </div>

    </BrowserRouter>
  );
}

export default App;
