import React from 'react';
import {Link} from 'react-router-dom'

function Category(props){
    return(
        <Link to="/{props.link} "className="category">
            <img src={props.source} alt={props.description} className="category-image"/>  
            {props.name}   
            <Link to="/{props.link}"></Link>
        </Link>
    )
}

export default Category;