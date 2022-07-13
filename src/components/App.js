import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import { name, city } from "../data/data.js";
import { name1, city1 } from "../data/data";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
