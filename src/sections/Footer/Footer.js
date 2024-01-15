import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="container py-3 text-center fs-6">
      Copyright © {year}{" "}
      <a className="text-decoration-none " href="#">
        <span className="studio">Training Studio</span>
      </a>
    </div>
  );
}

export default Footer;
