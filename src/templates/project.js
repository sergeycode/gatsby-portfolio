import React from "react";
import { graphql } from "gatsby";
import Project from "../components/project";

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      details
      design
      role
      tech
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson;
  const title = project.title;
  const description = project.description;
  const url = project.url;
  const details = project.details;
  const design = project.design;
  const role = project.role;
  const tech = project.tech;
  const imageData = project.image.childImageSharp.fluid;

  return (
    <Project
      title={title}
      description={description}
      imageData={imageData}
      url={url}
      details={details}
      design={design}
      role={role}
      tech={tech}
    />
  );
};

export default ProjectTemplate;
