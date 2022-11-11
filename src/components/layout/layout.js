import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./layout.module.scss";
import { IntlProvider } from "react-intl";

const Layout = ({ children }) => {
  const locale = "en";
  const [currentLocale, setCurrentLocale] = useState(locale);

  const handleChange = (e) => {
    let url = window.location.href;
    setCurrentLocale(e.target.value);
    sessionStorage.setItem("LOCALE", e.target.value);
    url.indexOf("work") > -1 && window.location.reload();
  };

  useEffect(() => {
    setCurrentLocale(
      sessionStorage.getItem("LOCALE")
        ? sessionStorage.getItem("LOCALE")
        : currentLocale
    );
  }, [currentLocale]);

  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]');
  }

  return (
    <IntlProvider locale={currentLocale} defaultLocale={locale}>
      <div className={styles.container}>
        <Header handleChange={handleChange} />
        <main className={styles.page}>{children}</main>
        <Footer handleChange={handleChange}/>
      </div>
    </IntlProvider>
  );
};
export default Layout;
