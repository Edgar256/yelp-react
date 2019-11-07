import React from 'react'

function FooterLink(props){
    return(
        <a href={props.link} className="footer-link">{props.name}</a>
    )
}

export default FooterLink;