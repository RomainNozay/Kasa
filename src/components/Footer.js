import React from "react";
import logoFooter from "../asset/img/Logo_white.png";

function Footer() {
    return(
        <footer>
            <div id="footer_container">
                <img src={logoFooter} alt="Mot Kasa stylisé avec une maison à la place du A en blanc" />
                <p>&copy; 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;