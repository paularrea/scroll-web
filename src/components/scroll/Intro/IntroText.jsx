import React from "react";
import { Parallax } from "react-scroll-parallax";
import styles from "./introScroll.module.scss";

const IntroText = () => {
  return (
    <section className={styles.text_container}>
      <div className={styles.flex}>
        <Parallax translateY={[25, 130]}><h1>W</h1></Parallax>
        <Parallax translateY={[-136, 150]}><h1>E</h1></Parallax>
        <Parallax translateY={[-5, 140]}><h1>B</h1></Parallax>
      </div>
      <div className={styles.flex}>
      <Parallax translateY={[-30, 130]}><h1>D</h1></Parallax>
        <Parallax translateY={[-220, 170]}><h1>E</h1></Parallax>
        <Parallax translateY={[-310, 190]}><h1>V</h1></Parallax>
        <Parallax translateY={[-220, 170]}><h1>E</h1></Parallax>
        <Parallax translateY={[-30, 130]}><h1>L</h1></Parallax>
        <Parallax translateY={[-220, 170]}><h1>O</h1></Parallax>
        <Parallax translateY={[-310, 190]}><h1>P</h1></Parallax>
        <Parallax translateY={[-220, 170]}><h1>M</h1></Parallax>
        <Parallax translateY={[-30, 130]}><h1>E</h1></Parallax>
        <Parallax translateY={[3, 130]}><h1>N</h1></Parallax>
        <Parallax translateY={[-53, 150]}><h1>T</h1></Parallax>
      </div>
    </section>
  );
};

export default IntroText;
