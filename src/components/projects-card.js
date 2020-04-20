import React from "react";
import { Link } from "gatsby-plugin-modal-routing";
import Image from "gatsby-image";

const ProjectsCard = ({ slug, title, description, imageData }) => (
  <div className="card">
    <Link className="card-image" to={`/${slug}/`} asModal>
      <Image fluid={imageData} alt={title} />
    </Link>
    <Link to={`/${slug}/`} asModal className="card-description">
      <h2 className="card-heading font-xlt">{title}</h2>
      <p className="card-subheading font-b">{description}</p>
      <div className="card-line"></div>
    </Link>
  </div>
);

export default ProjectsCard;
