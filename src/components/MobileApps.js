import React from 'react';
import MobApp from './MobApp';

function MobileApps(props){
    return(
        <div className="container mobile-apps" >
            <div className="">
                <h5 className="yelp-red center-text">Yelp Mobile Apps</h5>
            </div>
            <div className="mobile-apps-inner">
                <MobApp 
                    name="iPhone, iPad and iWatch"
                    source="https://s3-media0.fl.yelpcdn.com/assets/public/pitch_ios.yelp_styleguide.yji-960cce5c1917bdabc568aa735f2d866f.png"
                    text="iPhone, iPad and iWatch"
                    link="www.google.com/playstore"
                />
                <MobApp 
                    name="Android"
                    source="https://s3-media0.fl.yelpcdn.com/assets/public/pitch_android.yelp_styleguide.yji-a91a4a087787b1aa9aa729e3de5743d7.png"
                    text="iAndroid"
                    link="www.google.com/playstore"
                />
            </div>
        </div>
    )
}

export default MobileApps;