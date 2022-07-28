import React from "react";
import styles from "./Intro/scroll.module.scss";
import { Parallax } from "react-scroll-parallax";

const CloudTitle = ({ text }) => {
  return (
    <Parallax className={styles.text} opacity={[1, .5]} scale={[1, .5]}>
      <h1>{text}</h1>
    </Parallax>
  );
};

export default CloudTitle;
