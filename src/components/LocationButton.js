import React from 'react';

function LocationButton(prop){
    return(
        <button className="btn">
            {prop.name}
        </button>
    )
}

export default LocationButton;