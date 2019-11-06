import React from 'react';

function  HelpCommunity(props){
    return(
        <div className="help-community">
            <div className="col-sm-4">
                {props.image}
            </div>
            <div className="col-sm-8">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <button className="btn btn-danger yelp-red-bg">Start Your First Review</button>
            </div>
        </div>
    )
}

export default HelpCommunity;