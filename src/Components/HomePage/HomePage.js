import React from "react";
import GetInTouch from "./GetInTouch/GetInTouch";
import "./HomePage.css";
import Services from "./Services/Services";
import Banners from "./Sliders/Banners";

const HomePage = () => {
  return (
    <div>
      <Banners></Banners>
      <Services></Services>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default HomePage;
