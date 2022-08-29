import React from "react";
import styles from "./MentorOfWeek.module.css";

function MentorOfWeek(props) {
  return (
    <div className={styles.mentor}>
      <img src={`./images/${props.img}`} alt="mentor" />
      <div className={styles.name}>
        <p>
          <b>{props.name}</b>
        </p>
      </div>
    </div>
  );
}

export default MentorOfWeek;
