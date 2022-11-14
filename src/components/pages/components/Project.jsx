import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import JSON from "../../config/work.json";
import Layout from "../../layout/layout";
import styles from "./project.module.scss";
import GENERAL from "../../config/general.json";
import { useIntl } from "react-intl";
import { OnClick } from "../../animations/OnClick";
import { ReactComponent as Arrow } from "../../svg/Arrow.svg";
import Masonry from "react-masonry-css";
import { TabToShow } from "../../animations/TabToShow";
import { FadeInOnScroll } from "../../animations/FadeInOnScroll";

const breakpointColumnsObj = {
  default: 4,
  1100: 4,
  700: 3,
  500: 2,
};

const ProjectInfo = ({ hide, setHide }) => {
  const showRef = useRef();
  const { id } = useParams();
  const { locale } = useIntl();
  const project = JSON.latest_projects.find((item) => item.id === id);

  useEffect(() => {
    TabToShow(showRef, hide);
  }, [hide]);

  return (
    <>
      {project && (
        <div
          onClick={() => setHide(!hide)}
          ref={showRef}
          className={styles.text_container}
        >
          <p className={styles.tab}>Tab to {hide ? "show" : "hide"}</p>
          <section>
            <h2>{project.title}</h2>
            <div>
              <h5>{GENERAL.website[locale]}</h5>
              <a
                href={`https://${project.website}`}
                target="_blank"
                rel="noreferrer"
              >
                <h4>{project.website}</h4>
              </a>
            </div>
            <div>
              <h5>{GENERAL.service[locale]}</h5>
              <h4>{project.service[locale]}</h4>
            </div>
            <div>
              <h5>{GENERAL.client[locale]}</h5>
              <h4>{project.client}</h4>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

const ProjectGallery = ({ hide, setHide }) => {
  const { id } = useParams();
  const project = JSON.latest_projects.find((item) => item.id === id);

  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.my_masonry_grid}
        columnClassName={styles.my_masonry_grid_column}
      >
        {project.gallery.map((img, i) => (
          <div key={i}>
            <img src={img} alt={project.title} />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

const Project = ({ currentLocale, handleChange }) => {
  const animateRef = useRef();
  const [hide, setHide] = useState(false);
  useEffect(() => {
    setHide(hide);
  }, [hide]);

  useEffect(() => {
    OnClick(animateRef);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <div ref={animateRef} className={styles.go_back}>
          <Link to={`/`}>
            <Arrow />
          </Link>
        </div>
        <ProjectInfo hide={hide} setHide={setHide} />
        <ProjectGallery hide={hide} setHide={setHide} />
      </div>
    </Layout>
  );
};

export default Project;
