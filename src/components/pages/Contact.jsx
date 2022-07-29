import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import { useLocation } from "react-router-dom";
import styles from "../../sass/pages.module.scss";
import JSON from "../config/contact.json";
import SectionTitle from "../scroll/SectionTitle";

const Contact = () => {
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
    <div id="contact" className={styles.container}>
      <SectionTitle title={JSON.section_title[locale]} />
      <section className={styles.contact_section}>
        <div className={styles.text}>
          <h3>{JSON.title[locale]}</h3>
          <br />
          <h4> {JSON.sub_title[locale]}</h4>
          <br />
          <div>
            {JSON.contact_links.map((item) => (
              <div className={styles.flex}>
                <p>{item.title[locale]}</p>
                <a target="_blank" rel="noreferrer" href={item.link}>
                  {item.text_link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
