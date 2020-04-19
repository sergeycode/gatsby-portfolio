import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectsCard from "../components/projects-card";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            description
            url
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allProjectsJson.edges;

  return (
    <Layout>
      <SEO title="Projects" description="Projects by Sergey Ovcharenko" />
      <div className="projects page">
        <div className="container">
          <h1 className="projects-heading font-xlt">Projects</h1>
          {projects.map(({ node: project }, index) => {
            const title = project.title;
            const description = project.description;
            const slug = project.slug;
            const imageData = project.image.childImageSharp.fluid;
            return (
              <ProjectsCard
                key={index}
                title={title}
                description={description}
                imageData={imageData}
                slug={slug}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
