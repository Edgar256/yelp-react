import React from 'react';
import Footer from '../components/Footer';
import MainNav from '../components/MainNav';

function Error(){
    return(
        <div>
            <MainNav />
            <div className="container error-wrap">
                <h2>Horray, the link you are looking for doesnot exit on this server !!!</h2>    
            </div>
            <Footer />
        </div>
    )
}

export default Error;