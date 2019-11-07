import React from 'react';

function HomeIconLink(props){
    return(
        <a href="#" className="home-icon-link">
              <svg id="18x18_delivery" height="18" viewBox="0 0 18 18" width="18">
                  <path fill="#fff" d={props.svg}></path>
              </svg>
              <span>{props.name}</span>
        </a>
    )
}

export default HomeIconLink;