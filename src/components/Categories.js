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
        </div>
    )
}

export default Categories;