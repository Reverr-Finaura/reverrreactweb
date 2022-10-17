import React from "react";
import { Link } from "react-router-dom";
import styles from "./DashboardMentor.module.css";

function DashboardMentor({ mentor }) {
  return (
    <div className={styles.contact}>
      <img src={mentor.image} alt="" />
      <div className={styles.mentor_info}>
        <h5> {mentor.name}</h5>
        <p>{mentor.industry}</p>
      </div>
      <button>
        <Link className={styles.link} to={`/mentor-profile/${mentor.email}`}>
          Contact Now
        </Link>
      </button>
    </div>
  );
}

export default DashboardMentor;
