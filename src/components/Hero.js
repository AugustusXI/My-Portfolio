import React from "react";
import MyImage from "../assets/Profile-rainbow.jpeg";

const Hero = () => {
    return (
        <div className="container">

            <h1 className="hello">Hello,</h1>
            <h2 className="subTitle">My name is Landon August Tucker</h2>
            <img className="heroImg" src={MyImage} alt="Landon August" />
            <h1 className="title">I Make Websites</h1>

        </div>
    );
};
  
  export default Hero;