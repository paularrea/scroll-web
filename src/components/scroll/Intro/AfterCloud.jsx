import React from "react";
import { Parallax } from "react-scroll-parallax";
import styles from "./introScroll.module.scss";
import background from "../../../images/background.jpg";
import { ReactComponent as Cloud1 } from "../../../images/cloud_1.svg";
import { ReactComponent as Cloud2 } from "../../../images/cloud_2.svg";


const AfterCloud = () => {
  return (
    <div className={styles.animation_container}>
      <div className={styles.wrapper}>
      <div className={styles.cloud_2}>
          <Cloud2 />
        </div>
        <Parallax translateY={[-80, 80]} className={styles.background}>
          <img src={background} alt="" />
        </Parallax>
        <div className={styles.cloud_1}>
          <Cloud1 />
        </div>
      </div>
    </div>
  );
};

export default AfterCloud;
