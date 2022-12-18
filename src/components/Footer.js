import React from "react";

const Footer = () => {
    return (
      <div>
        <footer className="footer">
        <div className="waves">
          <div className="wavePink" id="wave1"></div>
          <div className="waveBlue" id="wave2"></div>
          <div className="waveBlue" id="wave3"></div>
          <div className="wavePink" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item"><a className="social-icon__link" href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a></li>
          <li className="social-icon__item"><a className="social-icon__link" href="#">
              <ion-icon name="logo-github"></ion-icon>
            </a></li>
          <li className="social-icon__item"><a className="social-icon__link" href="#">
              <ion-icon name="logo-medium"></ion-icon>
            </a></li>
        </ul>
        <ul className="menu">
          <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
          <li className="menu__item"><a className="menu__link" href="#">About</a></li>
          <li className="menu__item"><a className="menu__link" href="#">My Work</a></li>
          <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>

        </ul>
        <p>&copy;2023 Landon August | All Rights Reserved</p>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </footer>
      </div>
    );
  };
  
  export default Footer;