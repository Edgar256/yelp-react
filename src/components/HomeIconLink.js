import React from 'react';

function HomeIconLink(props){
    return(
        <a href="#" className="home-icon-link">
              {props.svg}
              {props.name}
        </a>
    )
}

export default HomeIconLink;