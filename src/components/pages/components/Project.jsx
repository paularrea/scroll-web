import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import JSON from "../../config/work.json";
import Layout from "../../layout/layout";
import styles from "./project.module.scss";
import GENERAL from "../../config/general.json";
import { useIntl } from "react-intl";
import { Parallax } from "react-scroll-parallax";
import MediaQuery from "react-responsive";

const Project = ({ currentLocale, handleChange }) => {
  const { id } = useParams();
  const { locale } = useIntl();
  const project = JSON.latest_projects.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {project ? (
        <Layout>
          <div className={styles.container}>
            <MediaQuery maxWidth={819}>
              <div className={styles.img_container}>
                <img src={project.img} alt={project.title} />
              </div>
              <div className={styles.text_container}>
                <h1>{project.title}</h1>
                <section>
                  <h5>{GENERAL.client[locale]}</h5>
                  <p>{project.client}</p>
                  <h5>{GENERAL.service[locale]}</h5>
                  <p>{project.service[locale]}</p>
                  <h5>{GENERAL.website[locale]}</h5>
                  <a
                    href={`https://${project.website}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.website}
                  </a>
                </section>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={820}>
              <Parallax scale={[0.7, 1]} translateX={[-10, 0]}>
                <div className={styles.img_container}>
                  <img src={project.img} alt={project.title} />
                </div>
              </Parallax>
              <Parallax scale={[0.7, 1]} translateY={[20, -20]}>
                <div className={styles.text_container}>
                  <h1>{project.title}</h1>
                  <section>
                    <h5>{GENERAL.client[locale]}</h5>
                    <p>{project.client}</p>
                    <h5>{GENERAL.service[locale]}</h5>
                    <p>{project.service[locale]}</p>
                    <h5>{GENERAL.website[locale]}</h5>
                    <a
                      href={`https://${project.website}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.website}
                    </a>
                  </section>
                </div>
              </Parallax>
            </MediaQuery>
            <a
              href={`https://${project.website}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.gallery_container}>
                {project.gallery.map((img, i) => (
                  <div key={i}>
                    <img src={img} alt={project.title} />
                  </div>
                ))}
              </div>
            </a>
          </div>
        </Layout>
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </>
  );
};

export default Project;
