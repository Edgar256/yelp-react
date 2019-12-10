import React from 'react';
import FooterTitle from './FooterTitle';
import FooterLink from './FooterLink';

function Footer(props){
    return(
        <div className="footer">
            <div className="container row footer-inner">
                <div className="col-sm-3">
                    <FooterTitle name="About"/>
                    <FooterLink  link="./about-yelp"  name="About Yelp"/>
                    <FooterLink  link="./careers"  name="Careers"/>
                    <FooterLink  link="./press"  name="Press"/>
                    <FooterLink  link="./investor-relations"  name="Investor Relations"/>
                    <FooterLink  link="./content-guidelines"  name="Content Guidelines"/> 
                    <FooterLink  link="./terms-of-service"  name="Terms of Service"/>
                    <FooterLink  link="./privacy-policy"  name="Privacy Policy"/>
                    <FooterLink  link="./nad-choices"  name="Ad Choices"/>   
                </div>
                <div className="col-sm-3">
                    <FooterTitle name="Discover"/>
                    <FooterLink  link="./yelp-project-cost-guides"  name="Yelp Project Cost Guides"/>
                    <FooterLink  link="./collections"  name="Collections"/>
                    <FooterLink  link="./talk"  name="Talk"/>
                    <FooterLink  link="./events"  name="Events"/>
                    <FooterLink  link="./the-local-yelp"  name="The Local Yelp"/>
                    <FooterLink  link="./yelp-blog"  name="Yelp Blog"/> 
                    <FooterLink  link="./support"  name="Support"/>
                    <FooterLink  link="./yelp-mobile"  name="Yelp Mobile"/>
                    <FooterLink  link="./developers"  name="Developers"/>
                    <FooterLink  link="./rss"  name="RSS"/>  
                </div>
                <div className="col-sm-3">
                    <FooterTitle name="Discover"/>
                    <FooterLink  link="./yelp-for-business-owners"  name="Yelp for Business Owners"/>
                    <FooterLink  link="./claim-your-business-page"  name="Claim your Business Page"/>
                    <FooterLink  link="./advertise-on-yelp"  name="Advertise on Yelp"/>
                    <FooterLink  link="./yelp-reservations"  name="Yelp Reservations"/>
                    <FooterLink  link="./yelp-wifi"  name="Yelp Wifi"/>
                    <FooterLink  link="yelp-wait-list"  name="Yelp Waitlist"/> 
                    <FooterLink  link="./business-success-stories"  name="Business Success Stories"/>
                    <FooterLink  link="./business-support"  name="Business Support"/>
                    <FooterLink  link="./yelp-blog-for-business-owner"  name="Yelp Blog for Business Owner"/>
                </div>
                <div className="col-sm-3">
                    <FooterTitle name="Languages"/>
                    <FooterLink  link="./new-page"  name="English"/>
                    <FooterTitle name="Countries"/>
                    <FooterLink  link="./new-page"  name="United States"/>
                </div>
            </div>
            <div className="container footer-image">
                <img 
                    src="https://s3-media0.fl.yelpcdn.com/assets/public/footer_cityscape.yelp_styleguide.yji-573fa19c843556eac5a998fc6d1f80f8.png"
                    alt="Footer backgroung "
                    className="img-footer-inner"
                />
                <div>
                    Copyright © 2004–2019 Yelp Inc. Yelp, Yelp logo, Yelp burst and related marks are registered trademarks of Yelp. Design by 
                    <a href="https://edgar256.github.io" target="_blank">  Edgar Tinkamanyire 2019</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;