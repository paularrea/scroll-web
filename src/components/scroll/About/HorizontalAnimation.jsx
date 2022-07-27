import React from "react";
import styles from "./aboutScroll.module.scss";
import JSON from "../../config/about.json";
import { useIntl } from "react-intl";
import { Parallax } from "react-scroll-parallax";

const HorizontalAnimation = () => {
  const { locale } = useIntl();
  return (
    <div className={styles.container}>
      {JSON.horizontal_scroll.map((item, i) => (
        <Parallax
          key={i}
          translateX={[item.start_position, item.end_position]}
          opacity={[0, 1]}
        >
          <h1>{item.text[locale]}</h1>
        </Parallax>
      ))}
    </div>
  );
};

export default HorizontalAnimation;
