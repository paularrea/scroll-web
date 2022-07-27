import React from "react";
import styles from "../../sass/pages.module.scss";
import IntroAnimation from "../scroll/Intro/IntroAnimation";
import IntroText from "../scroll/Intro/IntroText";

const Home = () => {
  return (
    <div id="home" className={styles.container}>
      <IntroText />
      <IntroAnimation />
    </div>
  );
};

export default Home;
