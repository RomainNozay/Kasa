import React from "react"

function Sticker({image_chambre, chambre_titre}) {
    return(
        <>
        <div className="stickers">
            <div className="sticker">
            <div className="sticker_background"></div>
            <image className="image_chambre" src={image_chambre} alt="photo de la chambre d'hôte" />
            <div className="chambre_text">{chambre_titre}</div>
            </div>
        </div>
        </>
    );
}

export default Sticker;