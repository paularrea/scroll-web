import React, { useEffect, useRef, useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import styles from "./header.module.scss";
import Menu from "./components/Menu";
import { ShowBurger } from "../animations/ShowBurger";

const Header = ({ handleChange }) => {
  const [isOpen, setOpen] = useState(false);
  const fade = useRef();

  useEffect(() => {
    ShowBurger(fade, 5);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div ref={fade} className={styles.burger}>
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
