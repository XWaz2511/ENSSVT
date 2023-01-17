import React from "react";
import ScreenTitle from "../misc/ScreenTitle";

const PPIIScreen = (props) => {
    return(
        <section>
            <div className="Screen" id="PPIIScreen">
                <ScreenTitle screenTitle={props.screenTitle} />
                <div className="PPIIScreenRow">
                    <div className="PPIIScreenRowImage">
                        <a href={props.images[0]} title="Cliquez Pour Agrandir" target="_blank" rel="noreferrer">
                            <img src={props.images[0]} alt="Première Illustration" />
                        </a>    
                    </div>
                    <div className="PPIIScreenRowText">
                        <p>
                            {props.texts[0]}
                        </p>
                    </div>
                </div>
                <div className="PPIIScreenRow">
                    <div className="PPIIScreenRowText">
                        <p>
                            {props.texts[1]}
                        </p>
                    </div>
                    <div className="PPIIScreenRowImage">
                        <a href={props.images[1]} title="Cliquez Pour Agrandir" target="_blank" rel="noreferrer">
                            <img src={props.images[1]} alt="Deuxième Illustration" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PPIIScreen;