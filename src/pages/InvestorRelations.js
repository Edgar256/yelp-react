import React from 'react';
import Footer from '../components/Footer';
import MainNav from '../components/MainNav';
import CategoryFilter from '../components/CategoryFilter';

function InvestorRelations(){
    return(
        <div>
            <MainNav />
            <CategoryFilter />
            <div className="container">
                <h2>Horray, the link you are looking for doesnot exit on this server !!!</h2>    
            </div>
            <Footer />
        </div>
    )
}

export default InvestorRelations;