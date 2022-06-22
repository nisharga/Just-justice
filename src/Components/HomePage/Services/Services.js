import React from "react";
import "./Services.css";
import ServicesData from "./ServicesData.json";
import SingleService from "./SingleService/SingleService";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <h2 className="text-center">Services</h2>

        <div className="row">
          {ServicesData.map((data) => (
            <SingleService data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
