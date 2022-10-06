import React from "react";
import { Link } from "react-router-dom";
import styles from "./RecommendedCourse.module.css";

function RecommendedCourse(props) {
  return (
    <Link to={props.url} className={styles.link}>
      <div className={styles.main}>
        <div>
          <p className={styles.name}>{props.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default RecommendedCourse;
