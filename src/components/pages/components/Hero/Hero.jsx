import React, { useLayoutEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Intro } from "../../../animations/Intro";
import styles from "./hero.module.scss";

const Hero = () => {
  const heroRef = useRef();
  useLayoutEffect(() => {
    Intro(heroRef);
  }, []);
  return (
    <section id='home' className={styles.container}>
      <Link  to="/" ref={heroRef} className={styles.content}>
        <div id="creative" className={styles.creative}>
          <h1>C</h1>
          <h1>r</h1>
          <h1>e</h1>
          <h1>a</h1>
          <h1>t</h1>
          <h1>i</h1>
          <h1>v</h1>
          <h1>e</h1>
        </div>
        <div className={styles.second_line_container}>
          <div id="visual" className={styles.visual}>
            <h1>V</h1>
            <h1>i</h1>
            <h1>s</h1>
            <h1>u</h1>
            <h1>a</h1>
            <h1>l</h1>
          </div>
          <div id="developer" className={styles.developer}>
            <h5>UI Developer</h5>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Hero;
