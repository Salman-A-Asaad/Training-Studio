import React, { useRef, useState } from "react";
import "./Schedule.css";
import { PrimaryTitleWhite } from "../../components/index";
const Schedule = () => {
  const ulRef = useRef();
  const mondayTime = ["10:00AM - 11:30AM", "2:00PM - 3:30PM"];
  const tuesdayTime = ["10:00AM - 11:30AM", "2:00PM - 3:30PM"];
  const wednesdayTime = ["10:00AM - 11:30AM", "2:00PM - 3:30PM"];
  const thursdayTime = ["10:00AM - 11:30AM", "2:00PM - 3:30PM"];
  const fridayTime = ["10:00AM - 11:30AM", "2:00PM - 3:30PM"];
  const [monday, setMonday] = useState([
    "10:00AM - 11:30AM",
    "2:00PM - 3:30PM",
  ]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const handelSetMonday = () => {
    Array.from(ulRef.current.children).forEach((e) => {
      e.classList.remove("active");
    });
    ulRef.current.children[0].classList.add("active");
    setTuesday([]);
    setMonday(mondayTime);
    setWednesday([]);
    setThursday([]);
    setFriday([]);
  };
  const handelSetTuesday = () => {
    Array.from(ulRef.current.children).forEach((e) => {
      e.classList.remove("active");
    });
    ulRef.current.children[1].classList.add("active");
    setTuesday(tuesdayTime);
    setMonday([]);
    setWednesday([]);
    setThursday([]);
    setFriday([]);
  };
  const handelSetWednesday = () => {
    Array.from(ulRef.current.children).forEach((e) => {
      e.classList.remove("active");
    });
    ulRef.current.children[2].classList.add("active");
    setTuesday([]);
    setMonday([]);
    setWednesday(wednesdayTime);
    setThursday([]);
    setFriday([]);
  };
  const handelSetThursday = () => {
    Array.from(ulRef.current.children).forEach((e) => {
      e.classList.remove("active");
    });
    ulRef.current.children[3].classList.add("active");
    setTuesday([]);
    setMonday([]);
    setWednesday([]);
    setThursday(thursdayTime);
    setFriday([]);
  };
  const handelSetFriday = () => {
    Array.from(ulRef.current.children).forEach((e) => {
      e.classList.remove("active");
    });
    ulRef.current.children[4].classList.add("active");
    setTuesday([]);
    setMonday([]);
    setWednesday([]);
    setThursday([]);
    setFriday(fridayTime);
  };
  return (
    <div id="schedule" className="schedule">
      <div className="container py-5 mt-5">
        <PrimaryTitleWhite mainTitle={["classes", "schedule"]} />
        <div className="mt-3">
          <ul ref={ulRef}>
            <li onClick={handelSetMonday} className="active">
              Monday
            </li>
            <li onClick={handelSetTuesday}>Tuesday</li>
            <li onClick={handelSetWednesday}>Wednesday</li>
            <li onClick={handelSetThursday}>Thursday</li>
            <li onClick={handelSetFriday}>Friday</li>
          </ul>
        </div>
        <div className="mt-3">
          <table border="1">
            <thead></thead>
            <tbody>
              <tr>
                <td>Fitness Class</td>
                <td>{monday[0]}</td>
                <td>{tuesday[0]}</td>
                <td>William G. Stewart</td>
              </tr>
              <tr>
                <td>Muscle Training</td>
                <td>{friday[0]}</td>
                <td>{thursday[0]}</td>
                <td>Paul D. Newman</td>
              </tr>
              <tr>
                <td>Body Building</td>
                <td>{tuesday[1]}</td>
                <td>{monday[1]}</td>
                <td>Boyd C. Harris</td>
              </tr>
              <tr>
                <td>Yoga Training Class</td>
                <td>{wednesday[0]}</td>
                <td>{friday[1]}</td>
                <td>Hector T. Daigle</td>
              </tr>
              <tr>
                <td>Advanced Training</td>
                <td>{thursday[1]}</td>
                <td>{wednesday[1]}</td>
                <td>Bret D. Bowers</td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
