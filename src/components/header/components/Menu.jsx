import React, { useEffect, useState } from "react";
import styles from "../header.module.scss";
import { Link as AnchorLink } from "react-scroll";
import { Link } from "react-router-dom";
import JSON from "../../config/nav.json";
import LanguagesButtons from "../../../translations/languagesButtons";
import { useIntl } from "react-intl";
import { ReactComponent as Cloud2 } from "../../../images/cloud_2.svg";


const Menu = ({ isOpen, setOpen, handleChange }) => {
  const [isHomePage, setHomePage] = useState(true);
  const { locale } = useIntl();

  useEffect(() => {
    let url = window.location.href;
    url.indexOf("work") > -1 && setHomePage(false);
  }, [isHomePage]);

  return (
    <nav style={{ top: isOpen && 0 }} className={styles.nav}>
      {JSON.nav.map((item, i) =>
        isHomePage ? (
          <AnchorLink
            key={i}
            to={item.id}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            onClick={() => setOpen(false)}
            className={styles.tab}
            style={{ width: isOpen ? "60%" : 0, opacity: isOpen ? 1 : .5 }}
          >
            {item.title[locale]}
          </AnchorLink>
        ) : (
          <Link
            key={i}
            to={`/#${item.id}`}
            className={styles.tab}
            onClick={() => setOpen(false)}
            style={{ width: isOpen ? "60%" : 0, opacity: isOpen ? 1 : .5 }}
          >
            {item.title[locale]}
          </Link>
        )
      )}
      <br />
      <LanguagesButtons
        className={styles.tab}
        style={{ width: isOpen ? "40%" : 0, opacity: isOpen ? 1 : .5 }}
        handleChange={handleChange}
        onClick={() => setOpen(false)}
      />
      <Cloud2 className={styles.cloud}/>
    </nav>
  );
};

export default Menu;
