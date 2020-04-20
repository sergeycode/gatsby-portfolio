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
  short,
  details,
  design,
  role,
  tech,
}) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <>
        {!modal ? <Header /> : null}
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
            <Image className="project-image" fluid={imageData} alt={title} />
            <div className="project-description">
              <h1 className="project-heading font-xlt">{title}</h1>
              <p className="project-subheading font-sb">{description}</p>
              <hr className="project-hr" />
              <p className="project-short font-xlt">{short}</p>
            </div>
          </div>
          <div className="project-content">
            <h2 className="project-details">Details</h2>
            <hr className="project-hr" />
            <p>Details: {details}</p>
            <p>Design: {design}</p>
            <p>Role: {role}</p>
            <p>Tech: {tech}</p>
            <a className="project-link" href={url}>
              View this progect online &rarr;
            </a>
          </div>
        </div>
        {!modal ? <Footer /> : null}
      </>
    )}
  </ModalRoutingContext.Consumer>
);

export default Project;
