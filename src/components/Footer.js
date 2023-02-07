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
       
        {/* <section id="contactMe" className="container">
      <div className="floatLeft">
        <form className="form">
        <div className="pageTitle title">Let's Connect! </div>
         <div className="secondaryTitle title">
          Let's work together.
        </div> 
        <input type="text" className="name formEntry" placeholder="Name" />
        <input type="text" className="email formEntry" placeholder="Email" />
        <textarea
          className="message formEntry"
          placeholder="Message"
          ></textarea>
        <input type="checkbox" className="termsConditions" value="Term" />
        <label className="terms">
          Captch Captcha.
        </label>
        <button className="submit formEntry">Submit</button>
          </form>
      </div>
    </section> */}
  
    <section className="floatRight">
        <ul className="social-icon">
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://www.linkedin.com/in/landontucker/"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://github.com/AugustusXI"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://medium.com/@landonaugust"
            >
              <ion-icon name="logo-medium"></ion-icon>
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="#hero">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#about">
              About
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#myWork">
              My Work
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#contactMe">
              Contact
            </a>
          </li>
        </ul>
        <p>&copy;2023 Landon August | All Rights Reserved</p>
        </section>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </footer>
    </div>
  );
};

export default Footer;
