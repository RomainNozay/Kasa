import React from "react"

function Sticker({id, picture, title}) {
    return(
        <div className="sticker" id={id}>
            <img className="sticker_image" src={picture} alt="Tuile"/>
            <span className="sticker_text">{title}</span>
        </div>
    );
}

export default Sticker;