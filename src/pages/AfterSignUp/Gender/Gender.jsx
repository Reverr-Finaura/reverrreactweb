import React from "react";
import { Link } from "react-router-dom";
import styles from "./gender.module.css";

const Gender = () => {
  return (
    <div className={styles.gender__container}>
      <h1 className={styles.big__heading}>What are you looking for?</h1>
      <div className={styles.gen__cards}>
        <div className={styles.gen__card}>
          <img src="./images/gen1.png" alt="" className={styles.gen__img} />
          <div className={styles.gen__para}>Male</div>
        </div>
        <div className={styles.gen__card}>
          <img src="./images/gen1.png" alt="" className={styles.gen__img} />
          <div className={styles.gen__para}>Female</div>
        </div>
        <div className={styles.gen__card}>
          <img src="./images/gen1.png" alt="" className={styles.gen__img} />
          <div className={styles.gen__para}>Other</div>
        </div>
        <div className={styles.gen__card}>
          <img src="./images/gen1.png" alt="" className={styles.gen__img} />
          <div className={styles.gen__para}>Not Say</div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className="loc__container">
        <h1 className={styles.loc__heading}>What are you looking for?</h1>
        <div className={styles.entry}>
          <input
            type="text"
            placeholder="Your Location Currently"
            className={styles.loc__hometown}
          />
          <input
            type="text"
            placeholder="Hometown"
            className={styles.loc__hometown}
          />
        </div>
      </div>
      <div className={styles.btns}>
        <Link to="/startup-confirm">
          <button className={styles.btn1}>Next</button>
        </Link>
        <button className={styles.btn2}>Skip</button>
      </div>
    </div>
  );
};

export default Gender;
