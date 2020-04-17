import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="home">
        <div className="container"></div>
      </div>
    </Layout>
  );
};

export default IndexPage;
