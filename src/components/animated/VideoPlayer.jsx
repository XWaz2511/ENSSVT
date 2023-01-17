import React from "react";

const VideoPlayer = (props) => {
    return (
        <article>
            <div className="VideoPlayer">
                <video src={props.video} controls />
            </div>
        </article>
    );
};

export default VideoPlayer;
