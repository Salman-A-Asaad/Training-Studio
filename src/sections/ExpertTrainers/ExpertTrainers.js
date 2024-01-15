import React from "react";
import "./ExpertTrainers.css";
import image1 from "../../assets/img/first-trainer.jpg";
import image2 from "../../assets/img/second-trainer.jpg";
import image3 from "../../assets/img/third-trainer.jpg";
import { PrimaryTitle, Card } from "../../components/index";
function ExpertTrainers() {
  const images = [image1, image2, image3];
  const titles = ["Bret D. Bowers", "Hector T. Daigl", "Paul D. Newman"];
  const types = ["Strength Trainer", "Muscle Trainer", "Power Trainer"];
  return (
    <div className="container py-5">
      <PrimaryTitle mainTitle={["expert", "trainers"]} />
      <div className="row mt-3">
        {titles.map((title, index) => {
          return (
            <Card
              key={index}
              type={types[index]}
              title={title}
              image={images[index]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ExpertTrainers;
