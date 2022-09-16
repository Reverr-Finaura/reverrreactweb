import React from "react";
import { Link } from "react-router-dom";
import styles from "./Industry.module.css";

function Industry(props) {
  return (
    <Link className={styles.link} to={`/mentor/${props.to}`}>
      <div className={styles.industry}>
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
    </Link>
  );
}

export default Industry;
