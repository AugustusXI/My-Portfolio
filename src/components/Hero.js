import React from "react";
import MyImage from "../assets/Profile-rainbow.jpeg";

const Hero = () => {
  return (
    <div id="hero" className="container">
      <h1 className="hello">Hello,</h1>
      <h2 className="subtitle">My name is Landon August Tucker</h2>
      <img className="heroImg" src={MyImage} alt="Landon August" />
      <h1 className="title">I Make</h1>
      <div className="textDiv">
        <h1 className="bigText">
          <span>Websites</span>
          <span>Websites</span>
          <span>Websites</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
