import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import yelpLogo from './images/default.yelp_design_web.yji-b085a608c15f110ce750ccef3e1e1db0.png';
import HomeIconLink from './components/HomeIconLink';
import HelpCommunity from './components/HelpCommunity';
import Locations from './components/Locations';
import Categories from './components/Categories';
import MobileApps from './components/MobileApps';
import Footer from './components/Footer';

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
                svg="M14.293 14.293l1.414 1.414c-.983.983-1.925 1.295-2.785 1.295-.86 0-1.637-.31-2.293-.573-1.22-.49-1.89-.76-2.926.274L6.29 15.29c1.967-1.966 3.766-1.246 5.08-.72 1.217.49 1.89.756 2.922-.278zM11.37 10.57c1.218.49 1.89.756 2.923-.277l1.414 1.414c-.983.983-1.925 1.295-2.785 1.295-.86 0-1.637-.31-2.293-.573-1.22-.49-1.89-.76-2.926.274L6.29 11.29c1.967-1.965 3.766-1.247 5.08-.72zM17 19H5V9.75l6-4.5 6 4.5V19zM11 2.75L2 9.5V12h1v9h16v-9h1V9.5l-9-6.75z"             
                name="Heating"
              />
              <HomeIconLink 
                svg="M13.61 17h-.007a1.39 1.39 0 0 1-1.376-1.587L13 10l-2-1c0-5.373 1.375-8 3.25-8 .497 0 .75.336.75.75v13.86A1.39 1.39 0 0 1 13.61 17zM6.557 9.912l.35 5.59a1.41 1.41 0 1 1-2.813 0l.35-5.59A1.994 1.994 0 0 1 3 8V1.5a.5.5 0 0 1 1 0v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0V8c0 .91-.61 1.67-1.443 1.912z"              
                name="Restaurants"
              />
              <HomeIconLink 
                svg="M16.7 16H13v-4.7a.3.3 0 0 0-.3-.3h-2.4a.3.3 0 0 0-.3.3V16H2.3a.3.3 0 0 1-.3-.3V9.25l6-2.182V3.735a.3.3 0 0 1 .434-.268l8.4 4.2a.3.3 0 0 1 .166.268V15.7a.3.3 0 0 1-.3.3zM8 11.3a.3.3 0 0 0-.3-.3H4.3a.3.3 0 0 0-.3.3v2.4a.3.3 0 0 0 .3.3h3.4a.3.3 0 0 0 .3-.3v-2.4zm4-9a.3.3 0 0 1 .3-.3h3.4a.3.3 0 0 1 .3.3v3.005L12 3.5V2.3zM1 7.17l6-2.354V6.37L1 8.72V7.17z"              
                name="Home Services"
              />
              <HomeIconLink 
                svg="M15.5 10c-1.93 0-3.5 1.57-3.5 3.5v.5H5.95a2.504 2.504 0 0 1-2.45 2 2.502 2.502 0 0 1-2.45-2H0v-2a5 5 0 0 1 5-5h3v2H7a1.5 1.5 0 0 0 0 3h2l2-4V5h1.94l-1-2H9V2h3.56l3.52 7.04c.653.085 1.28.308 1.838.665l-.537.842A3.502 3.502 0 0 0 15.5 10zM2.092 14c.207.58.757 1 1.408 1 .65 0 1.2-.42 1.408-1H2.092zM15.5 11c1.38 0 2.5 1.122 2.5 2.5S16.88 16 15.5 16 13 14.878 13 13.5s1.12-2.5 2.5-2.5zm0 4c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5-1.5.673-1.5 1.5.673 1.5 1.5 1.5z"              
                name="Delivery"
              />
            </div>
          </div>
        

        </div>
        <HelpCommunity 
          source="https://s3-media4.fl.yelpcdn.com/assets/srv0/yelp_large_assets/c40b1cb973c5/assets/img/illustrations/badges/write_review.png"
          title="Help the community"
          text="Find Yelp reviews helpful? Start helping others by sharing your experience."
        />
        <Locations />
        <Categories />
        <MobileApps />
      </div>   
      <Footer />
         
    </body>
  );
}

export default App;
