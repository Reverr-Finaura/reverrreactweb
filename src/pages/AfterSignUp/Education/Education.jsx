import React from "react";
import styles from "./education.module.css";

const Education = () => {
  return (
    <div className={styles.education__container}>
      <h1 className={styles.big__heading}>What are you looking for?</h1>
      <div className={styles.education__cards}>
        <div className={styles.education__card}>
          <img src="./images/edu1.png" alt="" className={styles.edu__img} />
          <div className={styles.edu__name}>high School</div>
        </div>
        <div className={styles.education__card}>
          <img src="./images/edu2.png" alt="" className={styles.edu__img} />
          <div className={styles.edu__name}>College</div>
        </div>
        <div className={styles.education__card}>
          <img src="./images/edu3.png" alt="" className={styles.edu__img} />
          <div className={styles.edu__name}>UnderGraduate</div>
        </div>
      </div>
      <div className={styles.education__cards}>
        <div className={styles.education__card}>
          <img src="./images/edu4.png" alt="" className={styles.edu__img} />
          <div className={styles.edu__name}>Post Graduate</div>
        </div>
        <div className={styles.education__card}>
          <img src="./images/edu5.png" alt="" className={styles.edu__img} />
          <div className={styles.edu__name}>PHD</div>
        </div>
        <div className={styles.education__card}>
          <img src="./images/edu6.png" alt="" className={styles.edu__img} />
          <div className={styles.edu__name}>Other</div>
        </div>
      </div>
      <div className={styles.btns}>
        <button className={styles.btn1}>Next</button>
        <button className={styles.btn2}>Skip</button>
      </div>
    </div>
  );
};

export default Education;
