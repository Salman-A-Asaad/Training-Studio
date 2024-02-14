import React from "react";
import image from "../../assets/img/tabs-first-icon.png";
const TrainingClassTitle = (props) => {
  return (
    <div
      onClick={() => {
        props.action(props.id);
      }}
      id={props.id}
      className="d-flex align-items-center justify-content-start class mb-3"
    >
      <img className="me-3" src={image} alt="" />
      <h2
        className={`text-capitalize fs-6 m-0 fw-bold ${
          props.id === 0 ? "active" : ""
        }`}
      >
        {props.title}
      </h2>
    </div>
  );
};

export default TrainingClassTitle;
