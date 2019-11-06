import React from 'react';
import LocationButton from './LocationButton';
import BusinessCard from './BusinessCard';

function  Locations(){
    return(
        <div className="center-text">
            <h4 className="yelp-red">Yelp in San Francisco</h4>
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
            <div className="">
                <h5 className="yelp-red center-text">Hot New Businesses</h5>
                <div className="business-card-wrapper">
                    <BusinessCard 
                        name="Hina Yamato"
                        location="Tokyo"
                        category="Japanense, Beer Bar"
                        time="2 weeks"
                        source="https://s3-media2.fl.yelpcdn.com/bphoto/-YVDSBrd5eQ4mlGFdfnUjA/l.jpg" srcset="https://s3-media2.fl.yelpcdn.com/bphoto/-YVDSBrd5eQ4mlGFdfnUjA/o.jpg 1.67x"
                    />
                    <BusinessCard 
                        name="Sheraton Hotel"
                        location="Kampala"
                        category="Hotel"
                        time="5 years"
                        source="_https://s3-media4.fl.yelpcdn.com/bphoto/GmIVpSkcTNO8SQpjmw3aLg/o.jpg"
                    />
                    <BusinessCard 
                        name="Oki Sushi"
                        location="Noe Valley"
                        category="Sushi Bars, Japanese"
                        time="2 years"
                        source="_https://s3-media4.fl.yelpcdn.com/bphoto/GmIVpSkcTNO8SQpjmw3aLg/l.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Locations;