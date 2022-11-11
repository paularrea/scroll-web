import React, { useLayoutEffect, useRef, useEffect } from "react";
import styles from "../../sass/projects.module.scss";
import JSON from "../config/work.json";
import { useIntl } from "react-intl";
import { Link, useLocation } from "react-router-dom";
import { InertiaScroll } from "../animations/InertiaScroll";

const Projects = () => {
  const scrollRef = useRef();
  const { locale } = useIntl();
  const location = useLocation();

  useLayoutEffect(() => {
    InertiaScroll(scrollRef);
  }, []);

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
    <section className={styles.container} id="work">
      <ul ref={scrollRef}>
        {JSON.latest_projects.map((project, i) => {
          return (
            <li key={i}>
              <Link to={`/work/${project.id}`}>
                <div>
                  <h3>0{i + 1}</h3>
                  <h2>{project.title}</h2>
                </div>
                <p>{project.service[locale]}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
