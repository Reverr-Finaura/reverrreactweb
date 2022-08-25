import React from "react";
import styles from "../slides/slides.module.css";

const Slides = ({ heading, para, imgUrl }) => {
  return (
    <div className={styles.slides}>
      <div className={styles.slides__container}>
        <div className={styles.slides__detail}>
          <h1 className={styles.slides__heading}>{heading}</h1>
          <p className={styles.slides__para}>{para}</p>
          <button className={styles.slides__btn}>Move Ahead ➡</button>
        </div>
        <div>
          <img
            className={styles.slides__img}
            src={`/images/${imgUrl}`}
            alt=""
          />
        </div>
      </div>
      <div className={styles.slides__progress}></div>
    </div>
  );
};

export default Slides;
