import React from 'react';
import FooterTitle from './FooterTitle';
import FooterLink from './FooterLink';

function Footer(props){
    return(
        <div className="footer">
            <div className="container row footer-inner">
                <div className="col-sm-3">
                    <FooterTitle name="About"/>
                    <FooterLink  link="./new-page"  name="About Yelp"/>
                    <FooterLink  link="./new-page"  name="Careers"/>
                    <FooterLink  link="./new-page"  name="Press"/>
                    <FooterLink  link="./new-page"  name="Investor Relations"/>
                    <FooterLink  link="./new-page"  name="Content Guidelines"/> 
                    <FooterLink  link="./new-page"  name="Terms of Service"/>
                    <FooterLink  link="./new-page"  name="Privacy Policy"/>
                    <FooterLink  link="./new-page"  name="Ad Choices"/>   
                </div>
                <div className="col-sm-3">
                    <FooterTitle name="Discover"/>
                    <FooterLink  link="./new-page"  name="Yelp Project Cost Guides"/>
                    <FooterLink  link="./new-page"  name="Collections"/>
                    <FooterLink  link="./new-page"  name="Talk"/>
                    <FooterLink  link="./new-page"  name="Events"/>
                    <FooterLink  link="./new-page"  name="The Local Yelp"/>
                    <FooterLink  link="./new-page"  name="Yelp Blog"/> 
                    <FooterLink  link="./new-page"  name="Support"/>
                    <FooterLink  link="./new-page"  name="Yelp Mobile"/>
                    <FooterLink  link="./new-page"  name="Developers"/>
                    <FooterLink  link="./new-page"  name="RSS"/>  
                </div>
                <div className="col-sm-3">
                    <FooterTitle name="Discover"/>
                    <FooterLink  link="./new-page"  name="Yelp for Business Owners"/>
                    <FooterLink  link="./new-page"  name="Claim your Business Page"/>
                    <FooterLink  link="./new-page"  name="Advertise on Yelp"/>
                    <FooterLink  link="./new-page"  name="Yelp Reservations"/>
                    <FooterLink  link="./new-page"  name="Yelp Wifi"/>
                    <FooterLink  link="./new-page"  name="Yelp Waitlist"/> 
                    <FooterLink  link="./new-page"  name="Business Success Stories"/>
                    <FooterLink  link="./new-page"  name="Business Support"/>
                    <FooterLink  link="./new-page"  name="Yelp Blog for Buiness Owner"/>
                </div>
                <div className="col-sm-3">
                    <FooterTitle name="Languages"/>
                    <FooterLink  link="./new-page"  name="English"/>
                    <FooterTitle name="Countries"/>
                    <FooterLink  link="./new-page"  name="United States"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;