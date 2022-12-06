import React, { useState } from "react";
import fleche from "../asset/img/Fleche.png";

function Carrousel({pictures}) {
    /* Crée un Hook d'état */
    let [displayPicture, ChangePicture] = useState(0);
    let numberPicture = pictures.length;

    const nextPicture = () => {
        if(displayPicture === numberPicture - 1) {
            ChangePicture(numberPicture = 0);
        } else {
            ChangePicture(displayPicture + 1);
        }
        return(ChangePicture);
    };

    const previousPicture = () => {
        if(displayPicture === 0) {
            ChangePicture(numberPicture - 1);
        } else {
            ChangePicture(displayPicture - 1);
        }
        return(ChangePicture);
    };  

    return(
        <div className="carrousel">
            {
                numberPicture > 1 && <img className="left_arrow" src={fleche} alt="Contenu précedént" onClick={previousPicture}/>
            }
            {
                pictures.map((picture, index) => {
                    return(
                        <img key={index} className={index === displayPicture ? 'carrousel-img actif' : 'carrousel-img'} src={picture} alt="Logement"/>
                    )
                })
            }
            {
                numberPicture > 1 && <img className="right_arrow" src={fleche} alt="Contenu suivant" onClick={nextPicture}/>
            }
        </div>
    );
}

export default Carrousel;