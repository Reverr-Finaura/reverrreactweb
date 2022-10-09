import React, { useEffect, useState } from "react";
import styles from "./Chapter.module.css";
import { useNavigate } from "react-router-dom";

function Chapter({ heading, status, description, url, courseImage }) {
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      setImage("./images/completed.svg");
    } else if (status === "available") {
      setImage("./images/playIcon.svg");
    } else if (status === "locked") {
      setImage("./images/locked.svg");
    }
  }, [status]);

  return (
    <div
      className={styles.chapter}
      onClick={() => {
        navigate(url);
      }}
    >
      <div className={styles.details}>
        <img src={image} alt="" />
        <img
          src={courseImage}
          alt="courseImage"
          className={styles.courseImage}
        />
        <div className={styles.info}>
          <p className={styles.name}>{heading}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <div>
          <img src="./images/bookIcon.svg" alt="" />
        </div>
        <div>
          <img src="./images/play.svg" alt="" />
        </div>
        <div>
          <img src="./images/bookmark.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Chapter;
