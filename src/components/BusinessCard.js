import React from 'react';

function BusinessCard(props){
    return(
        <div className="business-card">
            <img alt="Konomama" class="photo-img" height="" src={props.source} width=""></img>
            
            <div className="business-details">
                <h5>{props.name}</h5>
                <div>{props.category}</div>
                <span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </span>
                <span>
                    {props.reviews} Reviews
                </span>
                <div>{props.location}</div>
                <div>Opened {props.time} ago</div>
            </div>
        </div>
    )
}

export default BusinessCard;