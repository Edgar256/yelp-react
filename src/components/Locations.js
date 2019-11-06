import React from 'react';
import LocationButton from './LocationButton';

function  Locations(){
    return(
        <div className="center-text">
            <h3 className="yelp-red">Yelp in San Francisco</h3>
            <div className="locations-bar">
                <div className="col-sm-8">                    
                    <LocationButton 
                        name="New York"
                    />
                    <LocationButton 
                        name="San Jose"
                    />
                    <LocationButton 
                        name="Los Angeles"
                    />
                    <LocationButton 
                        name="Chichago"
                    />
                    <LocationButton 
                        name="Palo Alto"
                    />
                    <LocationButton 
                        name="Oakland"
                    />
                    <LocationButton 
                        name="New HampShire"
                    />
                </div>
            </div>
        </div>
    )
}

export default Locations;