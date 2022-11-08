import React from "react";
import Layout from "../layout/layout";
import About from "./About";
import Hero from "./components/Hero/Hero";
import Contact from "./Contact";
import Projects from "./Projects";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects/>
      <Contact/>
    </Layout>
  );
};

export default Index;
