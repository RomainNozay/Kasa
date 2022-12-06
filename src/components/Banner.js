import React from "react";

function Banner({picture, mobilePicture, title}) {
    return(
        <div className="banner">
            <img className="banner_picture" src={picture} alt="Bannière"/>
            <img className="banner_picture_mobile" src={mobilePicture} alt="Bannière"/>
            <div className="banner_darken"></div>
            <span className="banniere_txt">{title}</span>
        </div>
    );
}

export default Banner;