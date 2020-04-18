import { Link } from "gatsby";
import React, { useState } from "react";

const Footer = () => (
  <footer>
    <div className="container">
      © {new Date().getFullYear()} Sergey Ovcharenko <br /> Built with
      {` `}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
    </div>
  </footer>
);

export default Footer;
