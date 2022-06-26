import React from "react";
import "./SingleService.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleService = (props) => {
  const { title, image, price, id } = props.data;
  return (
    <div className="col-md-4 singleService">
      <img src={image} alt="user_image"></img>
      <h4>Price: ${price}</h4>
      <h5>{title}</h5>
      <Link to={`/checkout/${id}`} className="btn btn-primary mt-2">
        Buy Now <FontAwesomeIcon icon={faCartShopping} />
      </Link>
    </div>
  );
};

export default SingleService;
