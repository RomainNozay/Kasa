import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Rental from "../pages/Rental";
import About from "../pages/About";
import Error404 from "../pages/404";
import Layout from "../Layout/Layout";


function RoutesPath() {
    return(
        <HashRouter>
            <Layout>
                <Routes>
                    <Route element={<Navigate replace to="/Welcome"/>} path="/" />
                    <Route path="/Welcome" element={<Welcome />}/>
                    <Route path="/rental/:id" element={<Rental />}/>
                    <Route path="/About" element={<About />}/>
                    <Route path="*" element={<Error404/>}/>
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default RoutesPath;