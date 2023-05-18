import React, { useEffect, useState } from "react";
import "./Slider.css";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section className="banner">
      <div id="banner-slider" className="element_row">
        {sliderImage.map((slide, index) => (
          <div
            key={index}
            className={
              index === activeIndex ? "slides active" : "slides inactive"
            }
          >
            <img className="slider-image" src={slide.image} alt="" />
            <div className="slide-text">
              <h2 className="slide-title" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>{slide.title}</h2>
              <h3 className="slide-description" style={{ position: "absolute", top: "60%", left: "50%", transform: "translate(-50%, -50%)" }}>{slide.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Dots({ activeIndex, onClick, sliderImage }) {
  return (
    <div className="all-dots">
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onClick(index)}
        ></span>
      ))}
    </div>
  );
}

function Sliders({ slides, interval = 5000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = slides.length - 1;

  // start the slider interval when component mounts
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setActiveIndex((activeIndex) =>
        activeIndex === lastIndex ? 0 : activeIndex + 1
      );
    }, interval);
    return () => clearInterval(sliderInterval);
  }, [lastIndex, interval]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={slides} />
      <Dots
        activeIndex={activeIndex}
        sliderImage={slides}
        onClick={(index) => setActiveIndex(index)}
      />
    </div>
  );
}

const sliderImages = [
  {
    // title: "Your next starts here",
    // description: "Let’s Start",
    image: "assets/bg2.jpg",
  },
  
];

function Slider() {
  return (
    <div className="App">
      <Sliders slides={sliderImages} interval={5000} />
    </div>
  );
}

export default Slider;
