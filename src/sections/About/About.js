import React from "react";
import "./About.css";
import { PrimaryTitle, Program, Button } from "../../components/index";
const About = () => {
  const titles = [
    "Basic Fitness",
    "Advanced Muscle Course",
    "New Gym Training",
    "Yoga Training",
    "Basic Muscle Course",
    "Body Building Course",
  ];
  return (
    <>
      <div id="about" className="container py-5">
        <PrimaryTitle mainTitle={["choose", "program"]} />
        <div className="row my-3">
          {titles.map((title, index) => {
            return <Program key={index} titleName={title} />;
          })}
        </div>
      </div>
      <div className="begin-today p-2">
        <h1 className="begin-today-title">
          DON’T <span>THINK</span>, BEGIN <span>TODAY</span>!
        </h1>
        <p className="text-white">
          Ut consectetur, metus sit amet aliquet placerat, enim est ultricies
          ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a
          nisi luctus imperdiet.
        </p>
        <Button btnName={"became a member"} />
      </div>
    </>
  );
};

export default About;
