import React from "react";
import styles from "./CourseIntro.module.css";

const CourseIntro = ({ courseDetails }) => {
  return (
    <div className={styles.course_intro}>
      <div className={styles.course_left}>
        <h1>{courseDetails.title}</h1>
        <p className={styles.course_para}>{courseDetails.para}</p>
        <p className={styles.course_rating}>
          <span>
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
            <img src="/images/star.png" alt="" />
          </span>
          <span style={{ color: "#001AFF", fontWeight: "500" }}>
            (270+ Ratings)
          </span>
        </p>
        <p>
          Offered by{" "}
          <span style={{ color: "#2A72DE", fontWeight: "500" }}>REVERR</span>
        </p>
      </div>
      <div className={styles.course_right}>
        <p>What you will learn</p>
        <ul>
          <li>I am feature</li>
          <li>I am feature</li>
          <li>I am feature</li>
          <li>I am feature</li>
        </ul>
        <div className={styles.course_btns}>
          <button className={styles.save_btn}>Save to courses</button>
          <button className={styles.learn_btn}>Learn Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseIntro;
