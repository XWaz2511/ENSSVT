import React from "react";
import ScreenTitle from "../misc/ScreenTitle";
import SlideDownButton from "../buttons/SlideDownButton";

const MainTitleScreen = () => {
    return(
        <header>
            <div className="Screen" id="MainTitleScreen">
                <ScreenTitle screenTitle="Les Perturbations du Cycle de l'Eau" />
                <div className="Quote" id="MainTitleQuote">
                    <p>
                        Par Corinne, Marwan, Noam et Sasha de la TG2
                    </p>
                </div>
                <SlideDownButton eltToScroll="PPIIScreen" />
            </div>
        </header>
    );
};

export default MainTitleScreen;