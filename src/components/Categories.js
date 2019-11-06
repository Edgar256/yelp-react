import React from 'react';
import Category from './Category';

function Categories(props){
    return(
        <div>
            <Category 
                name="Restaurants"
                source="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants.yji-80b92cd513f0cd02dd41a05d5d846075.png"
                link="./restaurants"                
            />
            <Category 
                name="Shopping"
                source="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_shopping.yji-ad1f85392c049e567b6ee9dd50360ba4.png"
                link="./restaurants"                
            />
            <Category 
                name="Night life"
                source="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_nightlife.yji-4ee31d03d5b20dc5575588c3d284dc2d.png"
                link="./restaurants"                
            />
            <Category 
                name="Active Life"
                source="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants.yji-80b92cd513f0cd02dd41a05d5d846075.png"
                link="./restaurants"                
            />
            <Category 
                name="Beauty Spas"
                source="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants.yji-80b92cd513f0cd02dd41a05d5d846075.png"
                link="./restaurants"                
            />
            <Category 
                name="Automotive"
                source="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants.yji-80b92cd513f0cd02dd41a05d5d846075.png"
                link="./restaurants"                
            />
            <Category 
                name="Home Services"
                source="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants.yji-80b92cd513f0cd02dd41a05d5d846075.png"
                link="./restaurants"                
            />
            <Category 
                name="More Categories"
                source="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants.yji-80b92cd513f0cd02dd41a05d5d846075.png"
                link="./restaurants"                
            />
        </div>
    )
}

export default Categories;