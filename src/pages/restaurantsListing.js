import React from 'react';
import MapListing from '../components/MapListing';
import BizCard from '../components/BizCard';

function RestaurantsListing(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <h3>The Best 10 Home Services in San Francisco, CA</h3>
                    <div>
                        <BizCard 
                            name="Serena Hotels"
                            category="Restaurants"
                            reviews="243"
                            reviewText="“I tried Kung Food for delivery yesterday evening and was pleasantly surprised. Delivery was on time and the selections arrive hot. Highly recommend their hot…” more"
                            pricing="$$"
                            source="https://www.serenahotels.com/d/serenakampala/media/__thumbs_306_300_crop/bedroom.jpg"
                        />
                        <BizCard 
                            name="Serena Hotels"
                            category="Restaurants"
                            reviews="243"
                            pricing="$$"
                            source="https://www.serenahotels.com/d/serenakampala/media/__thumbs_306_300_crop/bedroom.jpg"
                        />
                        <BizCard 
                            name="Serena Hotels"
                            category="Restaurants"
                            reviews="243"
                            pricing="$$"
                            source="https://www.serenahotels.com/d/serenakampala/media/__thumbs_306_300_crop/bedroom.jpg"
                        />
                        <BizCard 
                            name="Serena Hotels"
                            category="Restaurants"
                            reviews="243"
                            pricing="$$"
                            source="https://www.serenahotels.com/d/serenakampala/media/__thumbs_306_300_crop/bedroom.jpg"
                        />
                    </div>
                </div>                
                <div className="col-sm-4">
                    <MapListing />
                </div>
            </div>
            
            
        </div>
    )
}

export default RestaurantsListing;