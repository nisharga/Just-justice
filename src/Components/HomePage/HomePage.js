import React from "react";
import "./HomePage.css";
import Services from "./Services/Services";
import Banners from "./Sliders/Banners";

const HomePage = () => {
  return (
    <div>
      <Banners></Banners>
      <Services></Services>
    </div>
  );
};

export default HomePage;
