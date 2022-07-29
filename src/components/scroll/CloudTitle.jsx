import React from "react";
import styles from "./Intro/scroll.module.scss";
import { Parallax } from "react-scroll-parallax";

const CloudTitle = ({ text, position }) => {
  return (
    <Parallax
      className={styles.text}
      style={{ textAlign: position }}
      opacity={[1, 0.8]}
    >
      <h1>{text}</h1>
    </Parallax>
  );
};

export default CloudTitle;
