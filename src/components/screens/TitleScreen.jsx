import React from "react";
import ScreenTitle from "../misc/ScreenTitle";
import SlideDownButton from "../buttons/SlideDownButton";

const TitleScreen = (props) => {
    return(
        <header>
            <div className="Screen" id="TitleScreen">
                <ScreenTitle screenTitle={props.screenTitle} />
                <SlideDownButton eltToScroll={props.eltToScroll} />
            </div>
        </header>
    );
};

export default TitleScreen;