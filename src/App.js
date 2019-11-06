import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import yelpLogo from './images/default.yelp_design_web.yji-b085a608c15f110ce750ccef3e1e1db0.png';
import HomeIconLink from './components/HomeIconLink';

function App() {
  return (
    <body className="a">      
      <div className="container">
      <Navigation />
      
      <div className=" jumbotron hero-wrapper row">
        <div className="home-page-logo-wrapper row">
          <img src={yelpLogo} alt="Yelp Logo" />
        </div>
        <div className="row">
          <div className="hero-logo"></div>
        </div>

        <div class="input-group mb-3">
          
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <input type="text" class="form-control custom-select" aria-label="Text input with segmented dropdown button"></input>
          <div class="input-group-prepend">
            <label class="input-group-text btn-search" for="inputGroupSelect01">
              <svg id="24x24_search" height="24" viewBox="0 0 24 24" width="24"><path d="M20.753 19.34l-4.295-4.297A7.46 7.46 0 0 0 18 10.5a7.5 7.5 0 1 0-7.5 7.5 7.46 7.46 0 0 0 4.543-1.542l4.296 4.295a1 1 0 1 0 1.412-1.414zM10.5 16A5.506 5.506 0 0 1 5 10.5C5 7.467 7.467 5 10.5 5S16 7.467 16 10.5 13.533 16 10.5 16z"></path></svg>
            </label>
          </div>
        </div> 
        <div className="clear"></div>

        <div className="icons-home-wrapper">
          <div className="col-sm-7">            
            <HomeIconLink 
              svg="Svg"              
              name="Heating"
            />
            <HomeIconLink 
              svg="Svg"              
              name="Restaurants"
            />
            <HomeIconLink 
              svg="Svg"              
              name="Home Services"
            />
            <HomeIconLink 
              svg="Svg"              
              name="Delivery"
            />
          </div>
        </div>
      

      </div>
      <div className="jumbtron">
        here is the jumbtron
      </div> 
      </div>      
    </body>
  );
}

export default App;
