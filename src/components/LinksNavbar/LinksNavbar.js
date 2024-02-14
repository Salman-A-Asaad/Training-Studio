import React from "react";
import { Link } from "react-router-dom";
const LinksNavbar = (props) => {
  return (
    <li className="nav-item">
      <Link className="nav-link text-uppercase" to={props.linkName}>
        {props.linkName}
      </Link>
    </li>
  );
};

export default LinksNavbar;
