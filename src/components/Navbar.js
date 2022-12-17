import react from "react"
const NavBar = () => {
    return (
      <header>
    <div className="navBar">
        <div className="brand">
          <h1>Landon August</h1>
        </div>
        <nav>
         <ul>
          <li> <a href="#" >My Work</a> </li>
          <li> <a href="#" >About</a> </li>
          <li> <a href="#" >Blog</a> </li>
          <li> <a href="#" >Contact Me</a> </li>
         </ul>
       </nav>
      </div>
      </header>
    );
  };
  
  export default NavBar;