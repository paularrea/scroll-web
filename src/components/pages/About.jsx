import React, { Suspense, useLayoutEffect, useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import { useLocation } from "react-router-dom";
import JSON from "../config/about.json";
import { DragElement } from "../animations/DragElement";
import { FadeInOnScroll } from "../animations/FadeInOnScroll";
import styles from "../../sass/about.module.scss";
import { Canvas, UseFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Avatar2 } from "../animations/Avatar_2";
import { InertiaScroll } from "../animations/InertiaScroll";

const About = () => {
  const scrollRef = useRef();
  const dragInstanceOne = useRef(null);
  const dragInstanceTwo = useRef(null);
  const dragTargetOne = useRef(null);
  const dragTargetTwo = useRef(null);
  const { locale } = useIntl();
  const location = useLocation();

  useLayoutEffect(() => {
    // FadeInOnScroll(scrollRef);
    // DragElement(dragInstanceOne, dragTargetOne);
    // DragElement(dragInstanceTwo, dragTargetTwo);
  }, []);

  useEffect(() => {
    InertiaScroll(scrollRef)
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
    <section id="about"  className={styles.container}>
      <div ref={scrollRef} className={styles.text_box}>
        <h4>
          MY NAME IS PAU LARREA, I AM A FRONT-END DEVELOPER WHO LOVES COMBINING
          FUNCTIONALITY AND NAVIGATION WITH BEAUTIFUL AESTHETICS.
        </h4>
        <div className={styles.sub_text_box}>
          <h5>THINGS I CAN HELP YOU WITH.</h5>
          <p>DESIGN / UX&UI / FRONTEND DEVELOPMENT / WEB</p>
        </div>
      </div>
      <div className={styles.imgs_box}>
        <Canvas
          shadows
          // ref={dragTargetOne}
          camera={{ fov: 32, position: [2, 3, 1] }}
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
        {/* <Canvas
    shadows
    camera={{ fov: 1000, position: [2, -2, 0] }}
    className={styles.canvas}
  >
    <Suspense fallback={null}>
      <ambientLight />
      <directionalLight intensity={2} position={[0, 0, 50]} />
      <Moon />
      <OrbitControls
        enablePan={true}
        enableZoom={false}
        enableRotate={true}
      />
    </Suspense>
  </Canvas> */}
      </div>
    </section>
  );
};

export default About;
