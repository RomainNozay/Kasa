import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Fiche from "../pages/FicheLogement";
import APropos from "../pages/Apropos";
import Erreur404 from "../pages/404";
import Layout from "../Layout/Layout";


function RoutesPath() {
    return(
        <HashRouter>
            <Layout>
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/accueil" element={<Accueil />}/>
                    <Route path="/logement/:id" element={<Fiche />}/>
                    <Route path="/a-propos" element={<APropos />}/>
                    <Route path="*" element={<Erreur404 />}/>
                </Routes>
                </Layout>
        </HashRouter>
    );
}

export default RoutesPath;