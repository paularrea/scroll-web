import React from "react";
import Layout from "../layout/layout";
import AfterCloud from "../scroll/Intro/AfterCloud";
import BeforeCloud from "../scroll/Intro/BeforeCloud";
import About from "./About";
import Contact from "./Contact";
import Work from "./Work";

const Index = () => {
  return (
    <Layout>
      <BeforeCloud/>
      <About />
      <Work />
      <AfterCloud />
      <Contact />
    </Layout>
  );
};

export default Index;
