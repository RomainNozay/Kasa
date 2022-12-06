import React from "react";
import Carrousel from "../components/Carousel";
import ListeLogements from "../asset/api/logements.json";
import { useParams, Navigate } from 'react-router-dom';

function Fiche() {
    /* Récupère la bonne fiche */
    const id = useParams();
    const ficheLogement = ListeLogements.find(logement => logement.id === id.id);

    return(
        <>
            {
                ficheLogement ? (
                    <div className="logement">
                        <Carrousel pictures={ficheLogement?.pictures}/>
                        
                        </div>
                
                ) : <Navigate replace to="/404"/>
            }
        </>
    )
}

export default Fiche;