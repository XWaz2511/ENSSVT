import { Link } from "react-scroll";
import React from "react";
import fullArrow from "../../resources/images/fullArrow_color1.webp";

const SlideDownButton = (props) => {
    return(
        <Link to={props.eltToScroll} smooth={true} duration={500}>
            <div className="Button" id="SlideDownButton">
                <p>
                    Cliquez Pour Descendre
                </p>
                <img src={fullArrow} alt="Flèche" />
            </div>
        </Link>
    );
};

export default SlideDownButton;