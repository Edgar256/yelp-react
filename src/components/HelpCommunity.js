import React from 'react';
import {Link} from 'react-router-dom';

function  HelpCommunity(props){
    return(
        <div className="help-community">
            <div className="col-sm-4">
                <img src={props.source} alt="community images"/>
            </div>
            <div className="col-sm-8">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <Link to="/write-a-review">
                    <button className="btn btn-danger yelp-red-bg">Start Your First Review</button>
                </Link>
            </div>
        </div>
    )
}

export default HelpCommunity;