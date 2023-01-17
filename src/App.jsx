import "./resources/style/index.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import CausesPage from "./pages/CausesPage";
import ConsequencesPage from "./pages/ConsequencesPage";
import ExperimentPage from "./pages/ExperimentPage";
import FooterBar from "./components/misc/FooterBar";
import HomePage from "./pages/HomePage";
import NavBar from "./components/misc/NavBar";
import React from "react";
import RetroactionsPage from "./pages/RetroactionsPage";

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/Accueil" exact element={<HomePage />} />
                    <Route path="/Experience" exact element={<ExperimentPage />} />
                    <Route path="/Causes" exact element={<CausesPage />} />
                    <Route path="/Consequences" exact element={<ConsequencesPage />} />
                    <Route path="/Retroactions" exact element={<RetroactionsPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
            <FooterBar />
        </div>
    );
};

export default App;
