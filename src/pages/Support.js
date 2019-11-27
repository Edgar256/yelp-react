import React from 'react';
import Footer from '../components/Footer';
import MainNav from '../components/MainNav';
import CategoryFilter from '../components/CategoryFilter';

function Support(){
    return(
        <div>
            <MainNav />
            <CategoryFilter />
            <div className="container">
                <h2>Horray, the link you are looking for is Support!</h2>    
            </div>
            <Footer />
        </div>
    )
}

export default Support;