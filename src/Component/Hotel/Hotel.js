import React from "react";
import "./Hotel.css";
const Hotel = (props) => {
  const { img, title, discript, price } = props.hotel;
  return (
    <div className="single-hotel">
      <div className="hotel-img">
        <img src={img} className="img-fluid" alt="" />
      </div>
      <div className="hotel-details">
        <h3>{title}</h3>
        <h5>{discript}</h5>
        <h5>{price}</h5>
      </div>
    </div>
  );
};

export default Hotel;
