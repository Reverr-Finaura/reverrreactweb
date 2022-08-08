import React from "react";
import styles from "./experience.module.css";

const Experience = () => {
  return (
    <div className={styles.ex__container}>
      <div className={styles.ex__heading}>Tell us your Experience</div>
      <div className={styles.ex__btns}>
        <button className={styles.ex__btn}>0-2 Years Experience</button>
        <button className={styles.ex__btn}>2-4 Years Experience</button>
        <button className={styles.ex__btn}>4-6 Years Experience</button>
        <button className={styles.ex__btn}>6-8 Years Experience</button>
        <button className={styles.ex__btn}>8-10 Years Experience</button>
        <button className={styles.ex__btn}>10-12 Years Exprience </button>
        <button className={styles.ex__btn}>12 + Years Experience</button>
      </div>
      <div className={styles.btns}>
        <button className={styles.btn1}>Next</button>
        <button className={styles.btn2}>Skip</button>
      </div>
    </div>
  );
};

export default Experience;
