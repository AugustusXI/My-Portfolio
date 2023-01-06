import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/index.css";
// ===========================================

const NavBar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div className="navBar">
        <div className="brand">
          <h1>Landon August</h1>
        </div>
        <nav ref={navRef}>
          <ul>
            <li>
              <a href="#myWork">My Work</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#">Contact Me</a>
            </li>
          </ul>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default NavBar;
