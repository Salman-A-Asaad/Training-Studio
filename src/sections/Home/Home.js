import React from "react";
import "./Home.css";
import { Button } from "../../components/index";
const Home = () => {
  return (
    <div id="home" className="home">
      <video autoPlay muted loop>
        <source src={require("../../assets/video/training-video.mp4")} />
        Your browser does not support the video tag.
      </video>
      <div className="content text-center">
        <h5>WORK HARDER, GET STRONGER</h5>
        <h1>
          EASY WITH OUR <span className="gym">GYM</span>
        </h1>
        <Button btnName={"became a member"} />
      </div>
    </div>
  );
};

export default Home;
