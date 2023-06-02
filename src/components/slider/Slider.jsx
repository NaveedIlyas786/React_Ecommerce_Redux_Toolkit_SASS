import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { slider_img_1, slider_img_2, slider_img_3, slider_img_4 } from "../../utils/Images";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='hero-slider'>
      <Carousel selectedItem={activeSlide}>
        <div className="hero-slider-item">
          <img src={slider_img_1} alt="HeroImg" />
        </div>
        <div className="hero-slider-item">
          <img src={slider_img_2} alt="HeroImg" />
        </div>
        <div className="hero-slider-item">
          <img src={slider_img_3} alt="HeroImg" />
        </div>
       
      </Carousel>
    </div>
  );
};

export default Slider;
