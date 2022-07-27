import React from "react";
import styles from "./languages.module.scss";

const LanguagesButtons = ({ handleChange, onClick, className, style }) => {
  const lang = [
    {
      text: "ENG",
      value: "en",
    },
    {
      text: "ESP",
      value: "es",
    },
    {
      text: "CAT",
      value: "cat",
    },
  ];
  return (
    <div className={className} style={style}>
      <section onClick={onClick} className={styles.language_container}>
        {lang.map((item, i) => {
          return (
            <div key={i}>
              <button onClick={handleChange} value={item.value}>
                {item.text}
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default LanguagesButtons;
