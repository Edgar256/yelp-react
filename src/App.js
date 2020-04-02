import React from 'react';
import {
          BrowserRouter as Router, 
          Route,
          Switch
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
import WriteAReview from './pages/WriteAReview';
import About from './pages/About';
import Careers from './pages/Careers';
import Press from './pages/Press';
import InvestorRelations from './pages/InvestorRelations';
import ContentGuidelines from './pages/ContentGuidelines';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AdChoices from './pages/AdChoices';
import YelpProjectCostGuides from './pages/YelpProjectCostGuides';
import Collections from './pages/Collections';
import Talk from './pages/Talk';
import Events from './pages/Events';
import TheLocalYelp from './pages/TheLocalYelp';
import YelpBlog from './pages/YelpBlog';
import Support from './pages/Support';
import YelpMobile from './pages/YelpMobile';
import Developers from './pages/Developers';
import RSS from './pages/RSS';
import YelpForBusinessOwners from './pages/YelpForBusinessOwners';
import ClaimYourBusinessPage from './pages/ClaimYourBusinessPage';
import AdvertiseOnYelp from './pages/AdvertiseOnYelp';
import YelpReservations from './pages/YelpReservations';
import YelpWifi from './pages/YelpWifi';
import YelpWaitList from './pages/YelpWaitList';
import BusinessSuccessStories from './pages/BusinessSuccessStories';
import BusinessSupport from './pages/BusinessSupport';
import YelpBlogForBusinessOwner from './pages/YelpBlogForBusinessOwner';
import Error from './pages/Error';

function App() {
  return (
    <Router basename="./">
        <Switch>
          <Route path="/index.html" component={Home} exact />
					<Route path="/restaurants" component={RestaurantsListing} />
          <Route path="/shopping" component={ShoppingListing} />
          <Route path="/night-life" component={NightLifeListing} />
          <Route path="/active-life" component={ActiveLifeListing} />
          <Route path="/beauty-spas" component={BeautySpasListing} />
          <Route path="/automotive" component={AutomotiveListing} />
          <Route path="/home-services" component={HomeServicesListing} />
          <Route path="/write-a-review" component={WriteAReview}/>
          <Route path="/about-yelp" component={About}/>
          <Route path="/careers" component={Careers}/>
          <Route path="/press" component={Press}/>
          <Route path="/investor-relations" component={InvestorRelations} />
          <Route path="/content-guidelines" component={ContentGuidelines} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/ad-choices" component={AdChoices}/>
          <Route path="/yelp-project-cost-guides" component={YelpProjectCostGuides} />
          <Route path="/collections" component={Collections} />
          <Route path="/talk" component={Talk} />
          <Route path="/events" component={Events} />
          <Route path="/the-local-yelp" component={TheLocalYelp} />
          <Route path="/yelp-blog" component={YelpBlog} />
          <Route path="/support" component={Support} />
          <Route path="/yelp-mobile" component={YelpMobile} />
          <Route path="/developers" component={Developers} />
          <Route path="/rss" component={RSS} />
          <Route path="/yelp-for-business-owners" component={YelpForBusinessOwners} />
          <Route path="/claim-your-business-page" component={ClaimYourBusinessPage} />
          <Route path="/advertise-on-yelp" component={AdvertiseOnYelp} />
          <Route path="/yelp-reservations" component={YelpReservations} />
          <Route path="/yelp-wifi" component={YelpWifi} />
          <Route path="/yelp-wait-list" component={YelpWaitList} />
          <Route path="/business-success-stories" component={BusinessSuccessStories} />
          <Route path="/business-support" component={BusinessSupport} />
          <Route path="/yelp-blog-for-business-owner" component={YelpBlogForBusinessOwner} />
          
          {/* <Route component={Error} /> */}
        </Switch>
    </Router>
  );
}

export default App;
