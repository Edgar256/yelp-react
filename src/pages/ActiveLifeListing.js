import React from 'react';
import MapListing from '../components/MapListing';
import BizCard from '../components/BizCard';
import Footer from '../components/Footer';
import MainNav from '../components/MainNav';
import CategoryFilter from '../components/CategoryFilter';

function ActiveLifeListing(){
    return(
        <div>
            <MainNav />
            <CategoryFilter />
            <div className="container">
            <div className="row">
                <div className="col-sm-9">
                    <h3>The Best 10 Active Life Places in San Francisco, CA</h3>
                    <div>
                        <BizCard 
                            name="Serena Hotels"
                            category="Restaurants"
                            reviews="243"
                            reviewText="“I tried Kung Food for delivery yesterday evening and was pleasantly surprised. Delivery was on time and the selections arrive hot. Highly recommend their hot…” more"
                            pricing="$$"
                            source="https://www.serenahotels.com/d/serenakampala/media/__thumbs_306_300_crop/bedroom.jpg"
                            tel="(415) 673-6688"
                            street="1615 McAllister St"
                            location="Noa Poa"
                        />
                        <BizCard 
                            name="Serena Hotels"
                            category="Restaurants"
                            reviews="243"
                            reviewText="“I tried Kung Food for delivery yesterday evening and was pleasantly surprised. Delivery was on time and the selections arrive hot. Highly recommend their hot…” more"
                            pricing="$$"
                            source="https://www.serenahotels.com/d/serenakampala/media/__thumbs_306_300_crop/bedroom.jpg"
                            tel="(415) 673-6688"
                            street="1615 McAllister St"
                            location="Noa Poa"
                        />
                        <BizCard 
                            name="Serena Hotels"
                            category="Restaurants"
                            reviews="243"
                            reviewText="“I tried Kung Food for delivery yesterday evening and was pleasantly surprised. Delivery was on time and the selections arrive hot. Highly recommend their hot…” more"
                            pricing="$$"
                            source="https://www.serenahotels.com/d/serenakampala/media/__thumbs_306_300_crop/bedroom.jpg"
                            tel="(415) 673-6688"
                            street="1615 McAllister St"
                            location="Noa Poa"
                        />
                        <BizCard 
                            name="Serena Hotels"
                            category="Restaurants"
                            reviews="243"
                            reviewText="“I tried Kung Food for delivery yesterday evening and was pleasantly surprised. Delivery was on time and the selections arrive hot. Highly recommend their hot…” more"
                            pricing="$$"
                            source="https://www.serenahotels.com/d/serenakampala/media/__thumbs_306_300_crop/bedroom.jpg"
                            tel="(415) 673-6688"
                            street="1615 McAllister St"
                            location="Noa Poa"
                        />
                        <BizCard 
                            name="Serena Hotels"
                            category="Restaurants"
                            reviews="243"
                            reviewText="“I tried Kung Food for delivery yesterday evening and was pleasantly surprised. Delivery was on time and the selections arrive hot. Highly recommend their hot…” more"
                            pricing="$$"
                            source="https://www.serenahotels.com/d/serenakampala/media/__thumbs_306_300_crop/bedroom.jpg"
                            tel="(415) 673-6688"
                            street="1615 McAllister St"
                            location="Noa Poa"
                        />
                        <BizCard 
                            name="Serena Hotels"
                            category="Restaurants"
                            reviews="243"
                            reviewText="“I tried Kung Food for delivery yesterday evening and was pleasantly surprised. Delivery was on time and the selections arrive hot. Highly recommend their hot…” more"
                            pricing="$$"
                            source="https://www.serenahotels.com/d/serenakampala/media/__thumbs_306_300_crop/bedroom.jpg"
                            tel="(415) 673-6688"
                            street="1615 McAllister St"
                            location="Noa Poa"
                        />
                        <BizCard 
                            name="Serena Hotels"
                            category="Restaurants"
                            reviews="243"
                            reviewText="“I tried Kung Food for delivery yesterday evening and was pleasantly surprised. Delivery was on time and the selections arrive hot. Highly recommend their hot…” more"
                            pricing="$$"
                            source="https://www.serenahotels.com/d/serenakampala/media/__thumbs_306_300_crop/bedroom.jpg"
                            tel="(415) 673-6688"
                            street="1615 McAllister St"
                            location="Noa Poa"
                        />
                        <BizCard 
                            name="Serena Hotels"
                            category="Restaurants"
                            reviews="243"
                            reviewText="“I tried Kung Food for delivery yesterday evening and was pleasantly surprised. Delivery was on time and the selections arrive hot. Highly recommend their hot…” more"
                            pricing="$$"
                            source="https://www.serenahotels.com/d/serenakampala/media/__thumbs_306_300_crop/bedroom.jpg"
                            tel="(415) 673-6688"
                            street="1615 McAllister St"
                            location="Noa Poa"
                        />
                    </div>
                </div>                
                <div className="col-sm-3">
                    <MapListing />                        
                </div>
            </div> 
            </div>
            <Footer />
        </div>
    )
}

export default ActiveLifeListing;