import React from "react";
import ScreenTitle from "../misc/ScreenTitle";
import VideoPlayer from "../animated/VideoPlayer";

const VideoPlayerScreen = (props) => {
    return(
        <section>
            <div className="Screen" id="VideoPlayerScreen">
                <ScreenTitle screenTitle={props.screenTitle} />
                <VideoPlayer video={props.video} />
            </div>
        </section>
    );
};

export default VideoPlayerScreen;