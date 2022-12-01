import React from "react";

function Banner({image, texte}) {
    return(
        <div className="banner">
            <img className="banner-img" src={image} alt="Bannière"/>
            <div className="banner-sombre"></div>
            <span className="banner-txt">{texte}</span>
        </div>
    );
}

export default Banner;