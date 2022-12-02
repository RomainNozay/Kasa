import React from "react";

function Banner({image, imageMobile}) {
    return(
        <div className="banner">
            <img className="banner-img" src={image} alt="Bannière"/>
            <img className="banner-img-mobile" src={imageMobile} alt="Bannière"/>
            <div className="banner-sombre"></div>
        </div>
    );
}

export default Banner;