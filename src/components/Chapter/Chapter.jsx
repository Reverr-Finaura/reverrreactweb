import React, { useEffect, useState } from "react";
import styles from "./Chapter.module.css";

function Chapter({ heading, status, description }) {
  const [image, setImage] = useState("");

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
    <div className={styles.chapter}>
      <div className={styles.details}>
        <img src={image} alt="" />
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
