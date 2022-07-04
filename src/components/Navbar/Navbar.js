import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
// import { ReactComponent as Logo } from "../../img/globe.svg";
import logo from "../../img/Nice.png";

function Navbar() {
  const [clicked, setClicked] = React.useState(false);

  const clickHamburger = () => {
    setClicked(true);
  };
  return (
    <nav className="NavbarItems">
      <h1></h1>
      <div className="hamburger" onClick={clickHamburger}>
        <img src={logo} className="menuLogo" />
        {/* <img src={require("./img/Nice.png")} /> */}
      </div>
      <ul className="nav-list">
        {MenuItems.map((item) => (
          <li key={item.id} className={item.cName}>
            <a className={item.url}></a>
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
