import React from "react";
import { image } from "../data/data";

// let png = "image"
function About() {
  return <div id="about">
  <h2>About Me</h2>
  <p>I love React framework expedites my work</p>
  <img src={image} alt="I made this"/>
  
  </div>;
}

export default About;
