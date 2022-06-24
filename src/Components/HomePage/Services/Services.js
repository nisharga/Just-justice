import React from "react";
import "./Services.css";
import SingleService from "./SingleService/SingleService";
import UseServices from "./../../../Hooks/useServices/UseServices";

const Services = () => {
  const [services] = UseServices();
  console.log("services", services);
  return (
    <div className="services">
      <div className="container">
        <h2 className="text-center">Services</h2>

        <div className="row">
          {services.map((data) => (
            <SingleService data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
