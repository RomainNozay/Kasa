import React from "react";

function Banner({image, imageMobile, titre}) {
    return(
        <div className="banner">
            <img className="banner-img" src={image} alt="Bannière"/>
            <img className="banner-img-mobile" src={imageMobile} alt="Bannière"/>
            <div className="banner-sombre"></div>
            <span className="banniere-txt">{titre}</span>
        </div>
    );
}

export default Banner;