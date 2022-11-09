import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import { useLocation } from "react-router-dom";
import styles from "../../sass/contact.module.scss";
import { AppearScroll } from "../animations/AppearScroll";
import { FadeInOnScroll } from "../animations/FadeInOnScroll";
import { Gmail } from "../animations/Gmail";
import { InertiaScroll } from "../animations/InertiaScroll";
import { Linkedin } from "../animations/Linkedin";
import { Whatsapp } from "../animations/Whatsapp";
import JSON from "../config/contact.json";

const Contact = () => {
  const { locale } = useIntl();
  const location = useLocation();
  const scrollRef = useRef();
  const circleRef = useRef();
  const fade = useRef();

  useEffect(() => {
    AppearScroll(circleRef);
    InertiaScroll(scrollRef);
    FadeInOnScroll(fade);
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
    <div id="contact" className={styles.container}>
      <section ref={scrollRef} className={styles.contact_section}>
        <div className={styles.text}>
          <h2>{JSON.title[locale]}</h2>
          <br />
          <h4> {JSON.sub_title[locale]}</h4>
        </div>
        <div ref={fade} className={styles.contact_flex}>
          {JSON.contact_links.map((item) => (
            <div className={styles.flex}>
              <Canvas
                shadows
                camera={{ fov: 5, position: [2, -1, 1] }}
                className={styles.canvas}
              >
                <Suspense fallback={null}>
                  <ambientLight />
                  <directionalLight intensity={1} position={[0, 30, 20]} />
                  {item.icon === "gmail" && <Gmail />}
                  {item.icon === "linkedin" && <Linkedin />}
                  {item.icon === "whatsapp" && <Whatsapp />}
                  <OrbitControls
                    enablePan={true}
                    enableZoom={false}
                    enableRotate={true}
                  />
                </Suspense>
              </Canvas>
              <a target="_blank" rel="noreferrer" href={item.link}>
                <section className={styles.text_container}>
                  <h5>{item.title[locale]}</h5>
                </section>
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* <div ref={circleRef} className={styles.circle}></div> */}
    </div>
  );
};

export default Contact;
