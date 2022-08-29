import React from "react";
import styles from "./Expertise.module.css";

function Expertise(props) {
  return (
    <div className={styles.expertise}>
      <div className={styles.img}>
        <img src={[props.img]} alt="expertise" />
      </div>
      <div className={styles.name}>
        <p>
          <b>{props.name}</b>
        </p>
      </div>
      <div className={styles.description}>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Expertise;
