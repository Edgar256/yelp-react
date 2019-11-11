import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" component={Home} />
        <Route path="/edgar" component={Navigation} />

    </BrowserRouter>
  );
}

export default App;
