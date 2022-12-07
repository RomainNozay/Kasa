import React from "react";
import Carrousel from "../components/Carousel";
import rentalList from "../asset/api/logements.json";
import { useParams, Navigate } from 'react-router-dom';
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";

function Rental() {
    /* Récupère la bonne fiche */
    const id = useParams();
    const rentalOne = rentalList.find(logement => logement.id === id.id);
    
    const equipmentList = rentalOne.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    });
    const rentalTags = rentalOne.tags.map((tags,index) => {
        return <Tag key={index} title={tags} />
    });
    return (
        <>
            {
                rentalOne ? (
                    <div className="rental">
                        <Carrousel pictures={rentalOne.pictures} />
                        <div className="information">
                        <div className="rental_area">
                            <h1 className="rental_title">{rentalOne.title}</h1>
                            <p className="rental_location">{rentalOne.location}</p>
                        </div>
                        <div className="owner">
                            <p className="owner_name">{rentalOne.host.name}</p>
                            <img className="owner_picture" src={rentalOne.host.picture} alt = "Propriétaire"/>
                        </div>
                        </div>
                        <div className="all_tag">
                            {rentalTags}
                        </div>
                        <div className="collapse_rental">
                        <Collapse title= "Description" description={rentalOne.description}/>
                        <Collapse title= "Équipement" description={equipmentList}/>
                        </div>
                    </div>
                ) : <Navigate replace to = "/404/" />
            }
        </>
    )
}

export default Rental;