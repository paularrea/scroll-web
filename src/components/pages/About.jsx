import React, { Suspense, useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import { useLocation } from "react-router-dom";
import JSON from "../config/about.json";
import styles from "../../sass/about.module.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Avatar2 } from "../animations/Avatar_2";
import { InertiaScroll } from "../animations/InertiaScroll";
import { FadeInOnScroll } from "../animations/FadeInOnScroll";

const About = () => {
  const scrollRef = useRef();
  const fadeRef = useRef();
  const { locale } = useIntl();
  const location = useLocation();

  useEffect(() => {
    InertiaScroll(scrollRef);
    FadeInOnScroll(fadeRef);
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <section id="about" className={styles.container}>
      <div ref={scrollRef} className={styles.text_box}>
        <h3>{JSON.text[locale]}</h3>
        <div className={styles.sub_text_box}>
          <h5> {JSON.title_tech[locale]}</h5>
          <h6>DESIGN / UX&UI / FRONTEND DEVELOPMENT / WEB</h6>
        </div>
      </div>
      <div  ref={fadeRef} className={styles.imgs_box}>
        <Canvas
          shadows
          camera={{ fov: 50, position: [2, -1, 1] }}
          className={styles.canvas}
        >
          <Suspense fallback={null}>
            <ambientLight />
            <directionalLight intensity={2} position={[0, 0, 20]} />
            <Avatar2 />
            <OrbitControls
              enablePan={true}
              enableZoom={false}
              enableRotate={true}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default About;
