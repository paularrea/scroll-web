import React from "react";
import "./footer.module.scss";
import LanguagesButtons from "../../translations/languagesButtons";

const Footer = ({ handleChange }) => {
  return (
    <footer>
      <div>©{new Date().getFullYear()} Pau Larrea, All Rights Reserved</div>
      <LanguagesButtons handleChange={handleChange} />
    </footer>
  );
};

export default Footer;
