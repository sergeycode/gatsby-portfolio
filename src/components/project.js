import React from "react";
import Image from "gatsby-image";
import { Link, ModalRoutingContext } from "gatsby-plugin-modal-routing";
import Header from "./header";
import Footer from "./footer";

const Project = ({
  title,
  description,
  url,
  imageData,
  details,
  design,
  role,
  tech,
}) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <>
        {!modal ? <Header /> : null}
        <div className={!modal ? "page project-page" : null}>
          <div className="container">
            <div className="project">
              {modal ? (
                <Link
                  className="project-close"
                  title="close"
                  to={closeTo}
                  state={{
                    noScroll: true,
                  }}
                >
                  &times;
                </Link>
              ) : null}
              <div className="project-card">
                <Image
                  className="project-image"
                  fluid={imageData}
                  alt={title}
                />
              </div>
              <div className="project-content">
                <h1 className="project-heading font-xlt">{title}</h1>
                <p className="project-subheading">{description}</p>
                <h2 className="project-details">Description</h2>
                <hr className="project-hr" />
                <p>Details: {details}</p>
                <p>Design: {design}</p>
                <p>Role: {role}</p>
                <p>Tech: {tech}</p>
                <a
                  className="project-link"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View this project online &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
        {!modal ? <Footer /> : null}
      </>
    )}
  </ModalRoutingContext.Consumer>
);

export default Project;
