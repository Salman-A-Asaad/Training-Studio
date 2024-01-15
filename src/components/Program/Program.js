import React from "react";
import "./Program.css";
import image from "../../assets/img/features-first-icon.png";
const Program = (props) => {
  return (
    <div className="program col-sm-12 col-md-6 d-flex mt-3">
      <img className="me-3 img-trainning " src={image} alt="" />
      <div className="d-flex flex-column p-content">
        <h1 className="text-dark fw-bold title-trainning">{props.titleName}</h1>
        <p className="p-trainning">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing .
        </p>
        <a className="discover-more text-uppercase" href="#">
          discover more
        </a>
      </div>
    </div>
  );
};

export default Program;
