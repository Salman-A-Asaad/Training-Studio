import React, { useRef, useState } from "react";
import "./Classes.css";
import image1 from "../../assets/img/training-image-01.jpg";
import image2 from "../../assets/img/training-image-02.jpg";
import image3 from "../../assets/img/training-image-03.jpg";
import image4 from "../../assets/img/training-image-04.jpg";
import {
  PrimaryTitle,
  Button,
  TraininClassTitle,
} from "../../components/index";
const Classes = () => {
  const trainingContainer = useRef();
  const [trainingNumber, setTrainingNumber] = useState(0);
  const images = [image1, image2, image3, image4];
  const titles = [
    "first training class",
    "second training class",
    "third training class",
    "fourth training class",
  ];
  const paragrafs = [
    "Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.",
    "Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultrices elementum odio ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum commodo et.",
  ];
  const handelChangeTrainingNumber = (number) => {
    Array.from(trainingContainer.current.children).forEach((e, i) => {
      if (i !== trainingContainer.current.children.length - 1)
        e.children[1].classList.remove("active");
    });
    if (number !== trainingContainer.current.children.length - 1)
      trainingContainer.current.children[number].children[1].classList.add(
        "active"
      );
    setTrainingNumber(number);
  };
  return (
    <div id="classes" className="container py-5 mt-5">
      <PrimaryTitle mainTitle={["our", "classes"]} />
      <div className="row mt-4">
        <div ref={trainingContainer} className="col-lg-4">
          {titles.map((t, i) => {
            return (
              <TraininClassTitle
                action={handelChangeTrainingNumber}
                id={i}
                key={i}
                title={t}
              />
            );
          })}
          <button className="btn-view-all text-capitalize fw-bold">
            view all schedules
          </button>
        </div>
        <div className="col-lg-8 details mt-3 mt-lg-0">
          <img className="img-training" src={images[trainingNumber]} alt="" />
          <h2 className="fs-5 fw-bold text-capitalize">
            {titles[trainingNumber]}
          </h2>
          <p className="details-par">{paragrafs[trainingNumber]}</p>
          <Button btnName={"view schedule"} />
        </div>
      </div>
    </div>
  );
};

export default Classes;
