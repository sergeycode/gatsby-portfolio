import { Link } from "gatsby";
import React, { useState } from "react";

const Header = () => {
  const [isToggled, setToggled] = useState(false);
  const handleToggle = () => setToggled(!isToggled);
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <div className="logo-line" />
            <div className="logo-line" />
            <div className="logo-line" />
            <div className="logo-line" />
            <Link className="logo-link" to="/">
              <div className="logo-hand">hnd</div>
              <div className="logo-crafted">crafted</div>
            </Link>
          </div>
          <button
            type="button"
            className="menu"
            onClick={handleToggle}
            aria-expanded={isToggled ? "true" : "false"}
          >
            <span className="menu-line" />
            <span className="menu-line" />
          </button>
          <div className="nav-menu">
            <ul className="nav-menu-list">
              <li className="nav-menu-list-item">
                <Link className="nav-menu-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-menu-list-item">
                <Link className="nav-menu-link" to="/projects">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
