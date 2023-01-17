import Carousel from "../carousels/Carousel";
import React from "react";

const CarouselScreen = (props) => {
    return(
        <section>
            <div className="Screen" id="CarouselScreen">
                <Carousel slides={props.slides} />
            </div>
        </section>
    );
};

export default CarouselScreen;