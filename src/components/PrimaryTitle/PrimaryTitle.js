import React from "react";
import lineDec from "../../assets/img/line-dec.png";
import "./PrimaryTitle.css";
const PrimaryTitle = (props) => {
  return (
    <div className="primary-title">
      <h1 className={`primary-title-h1 fw-bold text-uppercase`}>
        {props.mainTitle[0]} <span>{props.mainTitle[1]}</span>
      </h1>
      <img src={lineDec} alt="" />
    </div>
  );
};
const PrimaryTitleWhite = (props) => {
  return (
    <div className="primary-title">
      <h1 className={`primary-title-h1 fw-bold text-uppercase header-white`}>
        <p className="header-white"> {props.mainTitle[0]}</p>{" "}
        <span>{props.mainTitle[1]}</span>
      </h1>
      <img src={lineDec} alt="" />
    </div>
  );
};
export { PrimaryTitleWhite };
export default PrimaryTitle;
