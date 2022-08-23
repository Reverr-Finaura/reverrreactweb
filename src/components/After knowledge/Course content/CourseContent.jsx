import React from "react";
import styles from "./CourseContent.module.css";

const CourseContent = ({ imgUrl }) => {
  return (
    <div className={styles.course_content}>
      <div className={styles.cc_details}>
        <h1>About the course and the benefits it offers</h1>
        <h3>Course Content</h3>
        <p>5 Sections - 8 Sub Sections - 30 Mins total reading time </p>
        <ul>
          <li>What is Beta Testing</li>
          <li>Importance Of Beta Testing</li>
          <li>Who is an ideal beta user?</li>
          <li>How to find Beta testers</li>
          <li>What's next?</li>
        </ul>
      </div>
      <div className={styles.cc_img}>
        <img src={`/images/${imgUrl}`} alt="" />
      </div>
    </div>
  );
};

export default CourseContent;
