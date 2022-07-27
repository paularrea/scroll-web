import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import styles from "./header.module.scss";
import Menu from "./components/Menu";
import { Link } from "react-router-dom";

const Header = ({ handleChange }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">LOGO</Link>
        </div>
        <div className={styles.burger}>
          <Hamburger
            size={20}
            distance="sm"
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </header>
      <Menu handleChange={handleChange} isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};

export default Header;
