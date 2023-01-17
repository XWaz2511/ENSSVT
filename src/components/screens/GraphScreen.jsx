import Xarrow, {Xwrapper, useXarrow} from "react-xarrows";

import Draggable from "react-draggable";
import React from "react";
import ScreenTitle from "../misc/ScreenTitle";

const DraggableBox = ({id, content}) => {
    const updateXarrow = useXarrow();

    return(
        <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
            <div className="DraggableBox" id={id}>
                {content}
            </div>
        </Draggable>
    );
};

const GraphScreen = (props) => {
    return(
        <section>
            <div className="Screen" id="GraphScreen">
                <ScreenTitle screenTitle="Organisez les boîtes pour faire apparaitre les liens entre les éléments !" />
                <div className="Graph">
                    <Xwrapper>
                        {props.causesData.map((elt, index) => (
                            <DraggableBox id={elt["id"]} content={"Cause " + (index + 1) + " : " + elt["title"]} />
                        ))}

                        {props.consequencesData.map((elt, index) => (
                            <DraggableBox id={elt["id"]} content={"Conséquence " + (index + 1) + " : " + elt["title"]} />
                        ))}

                        {props.causesData.map(elt => (
                            elt["linkedTo"].map(target => (
                                <Xarrow start={elt["id"]} end={target} color="red" path="straight" strokeWidth={3} />
                            ))
                        ))}

                        {props.consequencesData.map(elt => (
                            elt["linkedTo"].map(target => (
                                <Xarrow start={elt["id"]} end={target} path="straight" strokeWidth={3} />
                            ))
                        ))}
                    </Xwrapper>
                </div>
            </div>
        </section>
    );   
};

export default GraphScreen;