import React, { useEffect, useState } from "react";

import LinkButton from "../buttons/LinkButton";

const AutoSlidingBackground = (props) => {

    const [slideTitle, setSlideTitle] = useState("");

    let slides = props.slides;

    let slideIndex = 0;

    const changeSlide = () => {

        if (slideIndex < slides.length - 1) {
            slideIndex = slideIndex + 1;
            setSlideTitle(slides[slideIndex][1]);
        } else {
            slideIndex = 0;
            setSlideTitle(slides[slideIndex][1]);
        }
        
        document.querySelector("#" + props.AutoSlidingBackgroundID).style.backgroundImage = `url(${require("../../resources/images/" + slides[slideIndex][0] + ".webp")})`;

        setTimeout(changeSlide, 5000);
    };

    useEffect(() => {
        if (slides.length > 1) {
            changeSlide(); 
        } else if (slides.length === 1) {
            setSlideTitle(slides[0][1]);
            document.querySelector("#" + props.AutoSlidingBackgroundID).style.backgroundImage = `url(${require("../../resources/images/" + slides[0][0] + ".webp")})`;
        }
    }, [slides]);

    return(
        <article>
            <div className="AutoSlidingBackground" id={props.AutoSlidingBackgroundID}>
                <LinkButton href={props.href} buttonText={props.buttonText} />
                <div className="SlideTitle">
                    <h2>
                        {slideTitle}
                    </h2>
                </div>
            </div>
        </article>
    );
};

export default AutoSlidingBackground;