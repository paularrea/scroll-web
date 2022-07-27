import React from "react";
import { Parallax } from "react-scroll-parallax";

const SectionTitle = ({ title }) => {
  return (
    <Parallax opacity={[0.5, 1]} scale={[0.7, 1]}>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
    </Parallax>
  );
};

export default SectionTitle;
