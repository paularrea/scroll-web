import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import { useLocation } from "react-router-dom";
import styles from "../../sass/pages.module.scss";
import JSON from "../config/about.json";
import HorizontalAnimation from "../scroll/About/HorizontalAnimation";
import SectionTitle from "../scroll/SectionTitle";

const About = () => {
  const { locale } = useIntl();
  const location = useLocation();

  useEffect(() => {
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
    <div id="about" className={styles.container}>
      <SectionTitle title={JSON.section_title[locale]} />
      <HorizontalAnimation />
    </div>
  );
};

export default About;
