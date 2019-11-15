import React from 'react';
import Category from './Category';

function Categories(props){
    return(
        <div className="categories">
            <h5 className="yelp-red center-text">Browse Businesses by Category</h5>            
           <div className="container">
                <Category 
                    name="Restaurants"
                    source="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants.yji-80b92cd513f0cd02dd41a05d5d846075.png"
                    link="restaurants"                
                />
                <Category 
                    name="Shopping"
                    source="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_shopping.yji-ad1f85392c049e567b6ee9dd50360ba4.png"
                    link="shopping"                
                />
                <Category 
                    name="Night life"
                    source="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_nightlife.yji-4ee31d03d5b20dc5575588c3d284dc2d.png"
                    link="night-life"                
                />
                <Category 
                    name="Active Life"
                    source="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_active_life.yji-7b915f332ffe61b88b3605594bd7fe0c.png"
                    link="active-life"                
                />
                <Category 
                    name="Beauty Spas"
                    source="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_beauty.yji-dda5bcbe7e6cc16014f194a9334f1b94.png"
                    link="beauty-spas"                
                />
                <Category 
                    name="Automotive"
                    source="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_automotive.yji-59b42d70fa94e2f1043fa1d629565598.png"
                    link="automotive"                
                />
                <Category 
                    name="Home Services"
                    source="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_home_services.yji-52d0e24aea08e0e1eb860a8f253a9c90.png"
                    link="home-services"                
                />
                <Category 
                    name="More Categories"
                    source="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_more_categories.yji-3110ec19fa2b634cbaf2e66a4ab23ee1.png"
                    link="more-categories"                
                />
            </div> 
        </div>
    )
}

export default Categories;