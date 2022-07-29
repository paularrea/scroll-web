import React from "react";
import { Parallax } from "react-scroll-parallax";
import styles from "./scroll.module.scss";
import background from "../../../images/background.jpg";
import { ReactComponent as Cloud1 } from "../../../images/cloud_1.svg";
import { ReactComponent as Cloud2 } from "../../../images/cloud_2.svg";
import JSON from "../../config/general.json";
import CloudTitle from "../CloudTitle";
import { useIntl } from "react-intl";

const AfterCloud = () => {
  const { locale } = useIntl();

  return (
    <div className={styles.animation_container}>
      <CloudTitle position='center' text={JSON.cloud_text_2[locale]} />
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
