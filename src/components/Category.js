import React from 'react';

function Category(props){
    return(
        <a href={props.link} className="category">
            <img src={props.source} alt={props.description} />  
            {props.name}   
        </a>
    )
}

export default Category;