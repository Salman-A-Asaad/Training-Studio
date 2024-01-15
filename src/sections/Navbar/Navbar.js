import "./Navbar.css";
import React from "react";
import { LinksNavbar } from "../../components/index";
const Navbar = () => {
  const linksName = ["about", "classes", "schedule", "contact"];
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4 main-title" href="#">
          TRAINING <span className="studio">STUDIO</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link px-lg-3" aria-current="page" href="#home">
                HOME
              </a>
            </li>
            {linksName.map((link, index) => {
              return <LinksNavbar key={index} linkName={link} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
