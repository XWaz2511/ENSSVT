import React, { useEffect, useState } from "react";

import CarouselScreen from "../components/screens/CarouselScreen";
import TitleScreen from "../components/screens/TitleScreen";
import causesData from "../resources/json/Causes.json";

const CausesPage = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        let causesArray = [];

        for (let elt of causesData) {
            causesArray.push([elt.id, elt.title, elt.description, elt.videoLink]);
        }

        setSlides(causesArray);
    }, [causesData]);
    
    
    return(
        <div className="Page" id="CausesPage">
            <TitleScreen screenTitle="Les Causes" eltToScroll="CarouselScreen" />
            <CarouselScreen slides={slides} />
        </div>
    );
};

export default CausesPage;