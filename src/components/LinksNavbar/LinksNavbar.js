import React from "react";

const LinksNavbar = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link text-uppercase" href={`#${props.linkName}`}>
        {props.linkName}
      </a>
    </li>
  );
};

export default LinksNavbar;
