import React from 'react';


function BizCard(props){
    return(
        <div className="bizcard">
            <div className="biz-img">
                <img alt="Konomama" className="photo-img" height="" src={props.source} width=""></img>
            </div>            
            <div className="business-details">
                <h5>{props.name}</h5>                
                <span>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    {props.reviews}
                </span>
                <div>{props.pricing} - {props.category}</div>                
                <div>{props.location}</div>
                <div>
                    {props.reviewText}
                </div>
            </div>
        </div>
    )
}

export default BizCard;