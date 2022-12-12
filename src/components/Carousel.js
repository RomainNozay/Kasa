import React, { useState } from "react";
import Fleche from "../asset/img/Fleche.png";
import PropTypes  from "prop-types";

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
                numberPicture > 1 && <img className="left_arrow" src={Fleche} alt="Contenu précedént" onClick={previousPicture}/>
            }
            {
                pictures.map((picture, index) => {
                    return(
                        <img key={index} className={index === displayPicture ? 'carrousel_picture actif' : 'carrousel_picture'} src={picture} alt="Logement"/>
                    )
                })
            }
            {
                numberPicture > 1 && <img className="right_arrow" src={Fleche} alt="Contenu suivant" onClick={nextPicture}/>
            }
        </div>
    );
}
Carrousel.propTypes = {
    pictures: PropTypes.string,
}
  
export default Carrousel;