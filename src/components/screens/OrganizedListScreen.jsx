import React from "react";
import ScreenTitle from "../misc/ScreenTitle";

const OrganizedListScreen = (props) => {
    return(
        <section>
            <div className="Screen" id="OrganizedListScreen">
                <ScreenTitle screenTitle={props.screenTitle} />
                <ol>
                    {props.lis.map(elt => (
                        <li><span className="liTitle">{elt[0]}</span><span className="liContent">{elt[1]}</span></li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default OrganizedListScreen;