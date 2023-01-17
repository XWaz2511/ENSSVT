import React, { useEffect, useState } from "react";

import CarouselScreen from "../components/screens/CarouselScreen";
import TitleScreen from "../components/screens/TitleScreen";
import consequencesData from "../resources/json/Consequences.json";

const ConsequencesPage = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        let consequencesArray = [];

        for (let elt of consequencesData) {
            consequencesArray.push([elt.id, elt.title, elt.description, elt.videoLink]);
        }

        setSlides(consequencesArray);
    }, [consequencesData]);
    
    
    return(
        <div className="Page" id="ConsequencesPage">
            <TitleScreen screenTitle="Les Conséquences" eltToScroll="CarouselScreen" />
            <CarouselScreen slides={slides} />
        </div>
    );
};

export default ConsequencesPage;