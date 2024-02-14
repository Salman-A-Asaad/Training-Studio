import "./App.css";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Home,
  About,
  Classes,
  Schedule,
  ExpertTrainers,
  Contact,
  Footer,
} from "./sections/index";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route
          path="/schedule"
          element={
            <>
              <Schedule />
              <ExpertTrainers />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
