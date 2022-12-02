import React from "react";

function Banner({image,imageMobile, texte}) {
    return(
        <div className="banner">
            <img className="banner-img" src={image} alt="Bannière"/>
            <div className="banner-sombre"></div>
            <span className="banner-txt">{texte}</span>
        </div>
    );
}

export default Banner;