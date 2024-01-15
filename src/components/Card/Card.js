import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card-container col-lg-4 mb-3">
      <div className="card ">
        <img src={props.image} className="card-img-top p-2" alt="..." />
        <div className="card-body">
          <p className="type">{props.type}</p>
          <h5 className="card-title fw-bold">{props.title}</h5>
          <p className="card-text text-secondary fs-6">
            Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents
            gluten-free vegan church-key pour-over seitan flannel.
          </p>
          {/* <div className="icons">
            <span>
              <i class="bi bi-facebook"></i>
            </span>
            <span>
              <i class="bi bi-twitter"></i>
            </span>
            <span>
              <i class="bi bi-linkedin"></i>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Card;
