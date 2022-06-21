import React from "react";
import Slider from "react-slick";
import "./Sliders.css";

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings}>
              <img
                src="https://i.ibb.co/VvmNSQN/1.jpg"
                alt=""
                className="sliderImage"
              />
              <img
                src="https://i.ibb.co/R3rmrCb/2-1.jpg"
                alt=""
                className="sliderImage"
              />
              <div>
                <h3 className="sliderImage">3</h3>
              </div>
              <div className="sliderImage">
                <h3>4</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
