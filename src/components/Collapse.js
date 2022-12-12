import React, { useState } from "react";
import Arrow from "../asset/img/Arrow_Back.png";
import PropTypes  from "prop-types";

function Collapse({title, description}) {
    /* Crée un Hook d'état
     importation de la fonction useState
     création d'une variable qui utilise useState on défini l'état d'origine du componsant (ici false = fermé)
     on récupère entre les crochets les deux valeurs renvoyées par useState CAD ouvert = l'état du composant
     et setOuvert une fonction qui sert à modifié l'état*/
    const [open, setOpen] = useState(false);

    /* On retourne sur la page A propos tout d'abord la forme globale titre + description puis on défini
    la partie haute (celle du titre) enfin on affiche dynamiquement les titre à partir de Apropos.js
    On ajoute la flèche qui au clique va déclenche la fonction qui inversera la valeur de ouvert en true 
    et fera apparaître la description récupéré dynamiquement à partir de Apropos.*/ 
    return(
        <div className="collapse">
            <div className="header_collapse">
                <div className="title_collapse">{title}</div>
                <span className={`arrow_collapse ${open}`} onClick={() => setOpen(!open)}>
                    <img src={Arrow} alt="Ouvrir cette liste"/>
                </span>
            </div>
            {
                open && <div className="description_collapse">{description}</div>
            }
        </div>
    );
}
Collapse.propTypes = {
    title: PropTypes.string,
    description: PropTypes.node
}

export default Collapse;
