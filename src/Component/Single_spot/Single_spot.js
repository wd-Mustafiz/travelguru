import React from "react";
import { Link } from "react-router-dom";
import "./Single_spot.css";
const Single_spot = (props) => {
  const { name, img } = props.spot;
  return (
    <div className="single_spot">
      <Link to={`/spot/${name}`}>
        <img
          src={img}
          className="img-fluid"
          width="100%"
          height="100%"
          alt=""
        />
      </Link>
      <h3 className="Spot_name">{name}</h3>
    </div>
  );
};

export default Single_spot;
