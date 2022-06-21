import React from "react";
import Slider from "react-slick";
import "./Banners.css";
import bannar0 from "./img/bannar0.jpg";
import bannar1 from "./img/bannar1.jpg";
import bannar2 from "./img/bannar2.jpg";
import bannar3 from "./img/bannar3.jpg";

const Banners = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider mb-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings}>
              <img src={bannar3} alt="" className="sliderImage" />
              <img src={bannar0} alt="" className="sliderImage" />
              <img src={bannar2} alt="" className="sliderImage" />
              <img src={bannar1} alt="" className="sliderImage" />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
