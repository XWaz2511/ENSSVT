import React from "react";
import fullArrow from "../../resources/images/fullArrow_color1.webp";

const LinkButton = (props) => {
    return(
        <a href={props.href}>
            <div className="Button" id="LinkButton">
                <p>
                    {props.buttonText}
                </p>
                <img src={fullArrow} alt="Flèche" />
            </div>
        </a>
    );
};

export default LinkButton;