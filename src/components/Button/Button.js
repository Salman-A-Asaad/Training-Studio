import React from "react";
import "./Button.css";
const Button = (props) => {
  return <button className="btn text-uppercase">{props.btnName}</button>;
};
export default Button;
