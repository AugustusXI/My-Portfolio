import React from "react";
import MyImage from "../assets/Profile-rainbow.jpeg";

const Hero = () => {
    return (
        <div className="container">

            <h1 className="hello">Hello,</h1>
            <h2>My name is Landon August Tucker</h2>
            <img className="heroImg" src={MyImage} alt="Landon August" />
            <h2>I Make Websites</h2>

        </div>
    );
};
  
  export default Hero;