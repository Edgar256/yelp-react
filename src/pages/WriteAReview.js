import React from 'react';
import Footer from '../components/Footer';
import MainNav from '../components/MainNav';

function WriteAReview(){
    return(
        <div>
            <MainNav />
            <div className="container error-wrap">
                <h2>Here goes the review</h2>    
            </div>
            <Footer />
        </div>
    )
}

export default WriteAReview;