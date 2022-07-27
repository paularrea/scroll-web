import React from "react";
import { Parallax } from "react-scroll-parallax";
import styles from "./introScroll.module.scss";
import background from "../../../images/background.jpg";
import { ReactComponent as Foreground } from "../../../images/foreground.svg";
import { ReactComponent as Rocket } from "../../../images/rocket.svg";

const IntroAnimation = () => {
  return (
    <div className={styles.animation_container}>
      <div className={styles.wrapper}>
        <Parallax translateY={[50, -50]} className={styles.scroll_1}>
          <Rocket />
        </Parallax>
        <Parallax translateY={[-80, 80]} className={styles.scroll_2}>
          <img src={background} alt="" />
        </Parallax>
        <div className={styles.scroll_3}>
          <Foreground />
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
