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
              <div className="logo-hand">hand</div>
              <div className="logo-crafted">crafted</div>
            </Link>
          </div>
          <button
            type="button"
            className="btn btn-menu"
            title="Menu"
            onClick={handleToggle}
            aria-expanded={isToggled ? "true" : "false"}
          >
            <span className="btn-menu-line" />
            <span className="btn-menu-line" />
          </button>
          <div className="nav-menu" data-toggle={isToggled ? "true" : "false"}>
            <ul className="nav-menu-list font-xlt">
              <li className="nav-menu-list-item animate-container">
                <Link className="nav-menu-link animate-top" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-menu-list-item animate-container">
                <Link className="nav-menu-link animate-top" to="/projects">
                  Projects
                </Link>
              </li>
            </ul>
            <div className="nav-menu-social">
              <ul className="nav-menu-list-social font-xlt">
                <li className="animate-container">
                  <a
                    className="animate-top"
                    href="https://twitter.com/sergeycode"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    twitter
                  </a>
                </li>
                <li className="animate-container">
                  <a
                    className="animate-top"
                    href="https://www.linkedin.com/in/sergeyovcharenko/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin
                  </a>
                </li>
                <li className="animate-container">
                  <a
                    className="animate-top"
                    href="https://github.com/sergeycode"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
