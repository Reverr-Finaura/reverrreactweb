import React from "react";
import { Link } from "react-router-dom";
import styles from "./MentorComponent.module.css";

function MentorComponent(props) {
  return (
    <Link className={styles.link} to={`/mentor-profile/${props.to}`}>
      <div className={styles.mentor}>
        <img src={props.img} alt={props.name} />
        <h1 className={styles.name}>{props.name}</h1>
        <p className={styles.type}>{props.type}</p>
        <div className={styles.rating}>
          <div>{props.rating}</div>
          <div className={styles.reviews}>{props.noofReviews}</div>
        </div>
      </div>
    </Link>
  );
}

export default MentorComponent;
