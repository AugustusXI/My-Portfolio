import React from "react";
import ProjectOne from "../assets/stocked-and-loaded.jpg";
import ProjectTwo from "../assets/visit-denver.jpg";
import ProjectThree from "../assets/weather-dashboard.jpg";

const Projects = () => {
    return (
      <section className="projectList">
                 <a href="https://github.com/AugustusXI/Stocked-and-Loaded">
                  <img className="projectImg" src={ProjectOne} alt="Stocked and Loaded" />
                 </a>
                 <a href="https://augustusxi.github.io/Visit-Denver/">
                  <img className="projectImg" src={ProjectTwo} alt="Visit Denver" />
                 </a>
                 <a href="https://augustusxi.github.io/Weather-Dashboard/">
                  <img className="projectImg" src={ProjectThree} alt="Weather Dashboard" />
                 </a>

      </section>
    );
  };
  
  export default Projects;