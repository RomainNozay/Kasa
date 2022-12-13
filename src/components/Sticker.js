import React from "react"
import PropTypes  from "prop-types";

function Sticker({id, picture, title}) {
    return(
        <div className="sticker" id={id}>
            <img className="sticker_image" src={picture} alt="Vue de la location"/>
            <span className="sticker_text">{title}</span>
        </div>
    );
}
Sticker.propTypes = {
    picture: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
}

export default Sticker;