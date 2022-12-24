import React from "react";
import MyImage from "../assets/Profile-rainbow.jpeg";

const Hero = () => {
  return (
    <div id="hero" className="container">
      <h1 className="hello">Hello,</h1>
      <img className="heroImg" src={MyImage} alt="Landon August" />
      <h2 className="subtitle">My name is Landon August Tucker</h2>
      <h1 className="title">I Make Websites</h1>
    </div>
  );
};

export default Hero;
