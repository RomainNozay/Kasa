import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Accueil from "../pages/Accueil";
// import Fiche from "./pages/Fiche_logement";
// import APropos from "../pages/APropos";
import Erreur404 from "../pages/404";


function RoutesPath() {
    return(
        <HashRouter>
            
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/accueil" element={<Accueil />}/>
                    {/* <Route path="/logement/:id" element={<Fiche_logement />}/>
                    <Route path="/a-propos" element={<APropos />}/> */}
                    <Route path="*" element={<Erreur404 />}/>
                </Routes>
            
        </HashRouter>
    );
}

export default RoutesPath;