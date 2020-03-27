import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import ProjectPreview from "../components/project-preview";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
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
      <SEO title="Home" />
      {/* {projects.map(({ node: project }) => {
        const title = project.title;
        const description = project.description;
        const slug = project.slug;
        const imageData = project.image.childImageSharp.fluid;
        return (
          <ProjectPreview
            title={title}
            description={description}
            imageData={imageData}
            slug={slug}
          />
        );
      })} */}
    </Layout>
  );
};

export default IndexPage;
