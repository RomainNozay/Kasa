import React from "react";
import { NavLink } from "react-router-dom";

function Error404() {
    return(
        <>
        <div className="page_404">
            <h1 className="title_404">404</h1>
            <span className="description_404">Oups! La page que vous demandez n'existe pas.</span>
            <NavLink to="/" className="lien_404">Retourner sur la page d’accueil</NavLink>
        </div>
        </>
    );
}

export default Error404;