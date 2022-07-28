import React from "react";
import { Parallax } from "react-scroll-parallax";
import styles from "./scroll.module.scss";
import background from "../../../images/background.jpg";
import { ReactComponent as Cloud1 } from "../../../images/cloud_1.svg";
import { ReactComponent as Rocket } from "../../../images/rocket.svg";

const BeforeCloud = () => {
  return (
    <div id="home" className={styles.animation_container}>
      <div className={styles.wrapper}>
        <Parallax translateY={[50, -50]} className={styles.rocket}>
          <Rocket />
        </Parallax>
        <Parallax translateY={[-80, 0]} className={styles.background}>
          <img src={background} alt="" />
        </Parallax>
        <div className={styles.cloud_1}>
          <Cloud1 />
        </div>
      </div>
    </div>
  );
};

export default BeforeCloud;