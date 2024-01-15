import React from "react";
import "./Contact.css";
import { Button, Input } from "../../components/index";
const Contact = () => {
  const inputsName = ["Your Name", "Your Email", "Subject", "Message"];
  return (
    <div id="contact" className="contact py-5">
      <div className="container">
        {inputsName.map((inputName, index) => {
          return <Input key={index} inputName={inputName} />;
        })}
        <div className="btn-contact">
          <Button btnName={"send message"} />
        </div>
      </div>
    </div>
  );
};
export default Contact;
