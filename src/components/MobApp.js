import React from 'react';

function MobApp(props){
    return(
        <a href={props.link} className="mob-app">
            <h5>{props.name}</h5>
            <img src={props.source} alt={props.text}/>
        </a>
    )
}

export default MobApp;