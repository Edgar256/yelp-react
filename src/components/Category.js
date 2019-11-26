import React from 'react';
import {Link} from 'react-router-dom'

function Category(props){
    return(
        <a href={props.link} className="category">
            <img src={props.source} alt={props.description} className="category-image"/>  
            {props.name}   
        </a>
    )
}

export default Category;