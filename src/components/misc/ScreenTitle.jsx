import React from "react";

const ScreenTitle = (props) => {
    return(
        <div className="ScreenTitle">
            <h1>
                {props.screenTitle}
            </h1>
        </div>
    );
};

export default ScreenTitle;