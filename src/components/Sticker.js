import React from "react"

function Sticker({id, image, title}) {
    return(
        <div className="sticker" id={id}>
            <img className="sticker_image" src={image} alt="Tuile"/>
            {/* <div className="sticker_black"></div> */}
            <span className="sticker_text">{title}</span>
        </div>
    );
}

export default Sticker;