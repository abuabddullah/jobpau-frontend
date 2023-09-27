import React from "react";
import img1 from "../../assets/hero-01.jpg";
import img2 from "../../assets/hero-02.jpg";
import img3 from "../../assets/hero-03.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const RactCarousel = () => {
  return (
    <Carousel autoPlay>
      <div>
        <img src={img2} alt="" className="rounded-full" />
        <p className="legend">319+ Developer Jobs</p>
      </div>
      <div>
        <img src={img3} alt="" className="rounded-full" />
        <p className="legend">5004+ Corporate Jobs</p>
      </div>
      <div>
        <img src={img1} alt="" className="rounded-full" />
        <p className="legend">3109+ Marketing Jobs</p>
      </div>
    </Carousel>
  );
};

export default RactCarousel;
