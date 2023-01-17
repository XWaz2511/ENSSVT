import GraphScreen from "../components/screens/GraphScreen";
import React from "react";
import TitleScreen from "../components/screens/TitleScreen";
import causesData from "../resources/json/Causes.json";
import consequencesData from "../resources/json/Consequences.json";

const RetroactionsPage = () => {
    return(
        <div className="Page" id="RetroactionsPage">
            <TitleScreen screenTitle="Le Cercle Vicieux" eltToScroll="GraphScreen" />
            <GraphScreen causesData={causesData} consequencesData={consequencesData} />
        </div>
    );
};

export default RetroactionsPage;