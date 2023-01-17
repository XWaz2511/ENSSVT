import React from "react";
import fullArrow from "../../resources/images/fullArrow_color1.webp";

const CarouselButton = (props) => {
    const slide = (buttonSide) => {
        let slider = document.querySelector(".CarouselWrapper");
        let sliderStyle = slider.style;   
            
        if (buttonSide === "left") {
            console.log(sliderStyle.marginRight);
            sliderStyle.marginRight = "80px";
        } else {
            console.log(sliderStyle.marginRight);
            sliderStyle.marginRight = "80px";
        }
    };

    return(
        <div className="Button" id={props.buttonSide === "left" ? "LeftCarouselButton" : "RightCarouselButton"}>
            <img src={fullArrow} alt="Flèche" onClick={slide.bind(props.buttonSide)} />
        </div>
    );
};

export default CarouselButton;