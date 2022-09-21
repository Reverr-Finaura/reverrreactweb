import React from "react";
import styles from "./ExpertiseItem.module.css";

function ExpertiseItem(props) {
  return (
    <div className={styles.expertise}>
      <img src={`/images/expertise${props.img}.svg`} alt="" />
      <p>{props.expertise}</p>
    </div>
  );
}

export default ExpertiseItem;
