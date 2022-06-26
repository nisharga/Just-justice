import React from "react";
import { useParams } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  let { id } = useParams();
  return (
    <div className="bg-light checkout">
      <h2 className="text-center">Checkout for Service {id}</h2>
    </div>
  );
};

export default Checkout;
