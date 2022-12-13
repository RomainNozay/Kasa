import React from "react";
import logoHeader from "../asset/img/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
            <img src={logoHeader} alt="Mot Kasa stylisé avec une maison à la place du A en orange"/>
            <nav>
                <NavLink to="/Welcome" className="link">Accueil</NavLink>
                <NavLink to="/About" className="link">À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;