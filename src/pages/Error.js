import React from 'react';
import Footer from '../components/Footer';

function Error(){
    return(
        <div>
            <div className="container error-wrap">
                <h2>Horray, the link you are looking for doesnot exit on this server !!!</h2>    
            </div>
            <Footer />
        </div>
    )
}

export default Error;