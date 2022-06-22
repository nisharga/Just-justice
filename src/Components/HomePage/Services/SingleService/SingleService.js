import React from "react";
import "./SingleService.css";

const SingleService = (props) => {
  const { name, userImage } = props.data;
  return (
    <div className="col-md-4 singleService">
      <img src={userImage} alt="user_image"></img>
      <h4>{name}</h4>
    </div>
  );
};

export default SingleService;
