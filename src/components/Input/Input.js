import React from "react";
import "./Input.css";
const Input = (props) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">{props.inputName}</span>
      <input type="text" className="form-control" />
    </div>
  );
};
export default Input;
