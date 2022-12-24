import react from "react";
const NavBar = () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }
  return (
    <header>
      <div className="navBar">
        <div className="brand">
          <h1>Landon August</h1>
        </div>
        <nav>
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
        </nav>
      </div>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </header>
  );
};

export default NavBar;
