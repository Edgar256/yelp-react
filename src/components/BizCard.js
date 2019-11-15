import React from 'react';


function BizCard(props){
    return(
        <div className="bizcard">
            <div className="biz-img">
                <img alt="Konomama" className="photo-img" height="" src={props.source} width=""></img>
            </div>            
            <div className="biz-details">
                <div className="biz-details-min">
                    <span className="biz-details-left">
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
                    </span>
                    <span className="biz-details-right">
                        <div>{props.tel}</div>
                        <div>{props.street}</div>
                        <div>{props.location}</div>
                    </span>
                </div>
                <div>
                    {props.reviewText}
                </div>
                <div className="biz-details-min order-wrap">   
                    <span className="biz-details-left">
                        <button className="btn btn-order">Start Order</button>
                    </span>
                    <span className="biz-details-right order-txt">
                        Offers takeout and delivery
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BizCard;