import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="home">
        <div className="container">
          <div className="home-grid">
            <div className="home-about">
              <h1 className="home-heading font-sb">Sergey Ovcharenko</h1>
              <h2 className="home-subheading font-sb">
                <div className="home-subheading-lg">front end</div>
                <div className="home-subheading-sm">developer</div>
                <div className="home-subheading-sm">portfolio</div>
              </h2>
            </div>
            <div className="home-image-container">
              <img
                className="home-image"
                src="/home-mockup-3.svg"
                alt="mobile screen mockup"
              />
              <img
                className="home-image"
                src="/home-mockup-2.svg"
                alt="mobile screen mockup"
              />
              <img
                className="home-image"
                src="/home-mockup-1.svg"
                alt="mobile screen mockup"
              />
            </div>
            <Link className="btn btn-primary" to="/projects">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
