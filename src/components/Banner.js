import React from "react";
import PropTypes  from "prop-types";

function Banner({picture, mobilePicture, title}) {
    return(
        <div className="banner">
            <img className="banner_picture" src={picture} alt="Vu d'une côte sauvage"/>
            <img className="banner_picture_mobile" src={mobilePicture} alt="Vu d'une côte sauvage"/>
            <div className="banner_darken"></div>
            <h1 className="banniere_txt">{title}</h1>
        </div>
    );
}
Banner.propTypes = {
    picture: PropTypes.string,
    mobilePicture: PropTypes.string,
    title: PropTypes.string,
}

export default Banner;