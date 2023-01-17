import LinkButton from "../buttons/LinkButton";
import React from "react";
import ScreenTitle from "../misc/ScreenTitle";
import VideoPlayer from "../animated/VideoPlayer";

const LinkedVideoPlayerScreen = (props) => {
    return(
        <section>
            <div className="Screen" id="LinkedVideoPlayerScreen">
                <ScreenTitle screenTitle={props.screenTitle} />
                <LinkButton href={props.href} buttonText={props.buttonText} />
                <VideoPlayer video={props.video} />
            </div>
        </section>
    );
};

export default LinkedVideoPlayerScreen;