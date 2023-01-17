import React from "react";

const Carousel = (props) => {
    return(
        <article>
            <div className="Carousel" id="Carousel">
                <div className="CarouselWrapper">
                    {props.slides.map((elt) => (
                        <div className="CarouselCase">
                            <div className="CarouselCaseImage">
                            <iframe src={"https://www.youtube.com/embed/" + elt[3]} title={elt[1]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen />
                            </div>
                            <div className="CarouselCaseText">
                                <div className="CarouselCaseTextTitle">
                                    <h2>
                                        {elt[1]}
                                    </h2>
                                </div>
                                <div className="CarouselCaseTextContent">
                                    <p>
                                        {elt[2]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Carousel;