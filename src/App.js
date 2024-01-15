import "./App.css";
import React from "react";
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
    <div>
      <Navbar />
      <Home />
      <About />
      <Classes />
      <Schedule />
      <ExpertTrainers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
