import React from "react";
import Layout from "../layout/layout";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Work from "./Work";

const Index = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Work />
      <Contact />
    </Layout>
  );
};

export default Index;
