import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";

const ProjectsCard = ({ slug, title, description, imageData }) => (
  <div className="card">
    <Link to={`/${slug}/`}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <Link to={`/${slug}/`} className="card-description">
      <h2 className="card-heading font-xlt">{title}</h2>
      <p className="card-subheading font-b">{description}</p>
    </Link>
  </div>
);

export default ProjectsCard;
