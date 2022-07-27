import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import { Link, useLocation } from "react-router-dom";
import styles from "../../sass/pages.module.scss";
import JSON from "../config/work.json";
import SectionTitle from "../scroll/SectionTitle";
import { Parallax } from "react-scroll-parallax";
import MediaQuery from "react-responsive";

const Work = () => {
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
    <div id="work" className={styles.container}>
      <SectionTitle title={JSON.section_title[locale]} />
      {JSON.latest_projects.map((project, i) => (
        <Link key={i} className={styles.card} to={`/work/${project.id}`}>
          <MediaQuery maxWidth={819}>
            <div className={styles.img_container}></div>
            <h3 style={{ textAlign: project.title_position }}>
              {project.title}
            </h3>
          </MediaQuery>
          <MediaQuery minWidth={820}>
            <Parallax
              translateX={[project.start_position, project.end_position]}
              opacity={[0, 1]}
            >
              <div className={styles.img_container}></div>
            </Parallax>
            <Parallax
              translateX={[project.start_position, project.end_position]}
              translateY={[20, -20]}
            >
              <h3 style={{ textAlign: project.title_position }}>
                {project.title}
              </h3>
            </Parallax>
          </MediaQuery>
        </Link>
      ))}
    </div>
  );
};

export default Work;
