import AutoSlidingBackground from "../animated/AutoSlidingBackground";
import React from "react";
import ScreenTitle from "../misc/ScreenTitle";

const AutoSlidingBackgroundScreen = (props) => {
    return(
        <section>
            <div className="Screen" id="AutoSlidingBackgroundScreen">
                <ScreenTitle screenTitle={props.screenTitle} />
                <AutoSlidingBackground AutoSlidingBackgroundID={props.AutoSlidingBackgroundID} slides={props.slides} href={props.href} buttonText={props.buttonText} />
            </div>
        </section>
    );
};

export default AutoSlidingBackgroundScreen;