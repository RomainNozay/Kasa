import React from "react";
import Carrousel from "../components/Carrousel";
import rentalList from "../asset/api/logements.json";
import { useParams, Navigate } from 'react-router-dom';
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import Star from "../components/Star";

function Rental() {
    /* Récupère la bonne fiche */
    const id = useParams();
    const rentalOne = rentalList.find(logement => logement.id === id.id);

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
                                <img className="owner_picture" src={rentalOne.host.picture} alt="Propriétaire" />
                            </div>
                        </div>
                        <div>
                            <div className="tag_rating">
                                <div className="all_tag">
                                    {rentalOne.tags.map((tags, index) => (<Tag key={index} title={tags} />))}
                                </div>
                                <Star rating={rentalOne.rating} />
                            </div>
                        </div>
                        <div className="collapse_rental">
                            <div className="box_collapse_description">
                                <Collapse title="Description" description={rentalOne.description} />
                            </div>
                            <div className="box_collapse_equipment">
                                <Collapse title="Équipement" description={rentalOne.equipments.map((equipment, index) => (<li key={index}>{equipment}</li>))} />
                            </div>
                        </div>
                    </div>
                ) : <Navigate replace to="/404/" />
            }
        </>
    )
}

export default Rental;