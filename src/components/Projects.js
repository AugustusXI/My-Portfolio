import React from "react";
import ProjectOne from "../assets/stocked-and-loaded.jpg";
import ProjectTwo from "../assets/visit-denver.jpg";
import ProjectThree from "../assets/weather-dashboard.jpg";

const Projects = () => {
  return (
    <section id="myWork" className="container">
      <h2>My Work</h2>
      <div className="projectList">
        <div className="tooltip">
          <a href="https://github.com/AugustusXI/Stocked-and-Loaded">
            <img
              className="projectImg"
              src={ProjectOne}
              alt="Stocked and Loaded"
            />
          </a>
          <p className="tooltipText">
            A inventory management app for restaurants. It has a working mongoDB
            database and apolloservers to run the backend. It includes a login
            and signup, where new users may register. The app finishes with
            queries and mutations to manipulate inventory between multiple lists
          </p>
        </div>
        <div className="tooltip">
          <a href="https://augustusxi.github.io/Visit-Denver/">
            <img className="projectImg" src={ProjectTwo} alt="Visit Denver" />
          </a>
          <p className="tooltipText">
            A small website dedicated to finding directions to local spots in
            denver, I also connected the yelp api to get review information on
            the selected locale.
          </p>
        </div>
        <div className="tooltip">
          <a href="https://augustusxi.github.io/Weather-Dashboard/">
            <img
              className="projectImg"
              src={ProjectThree}
              alt="Weather Dashboard"
            />
          </a>
          <p className="tooltipText">
            A weather dashboard that takes the city input and pulls weather
            information as well as saves the searches to localstorage for later
            use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
