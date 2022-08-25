import React from "react";
import { Link } from "react-router-dom";
import styles from "./Slide.module.css";
import "animate.css";

const Slide = ({ content, setCurrIndex, currIndex, size }) => {
  const handleNext = () => {
    setCurrIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrIndex((prev) => prev - 1);
  };

  return (
    <div
      className={`${styles.slide_container} animate__animated animate__fadeInRight`}
    >
      <div className={styles.course_content}>
        <div className={styles.course_details}>
          <h1>{content.title}</h1>
          <p>{content.para}</p>
          <div className={styles.btns_div}>
            {/* <Link> */}
            <button
              onClick={handleNext}
              style={{ display: currIndex === size - 1 && "none" }}
            >
              Move Ahead &rarr;{" "}
            </button>
            <button
              onClick={handlePrev}
              style={{ display: currIndex === 0 && "none" }}
            >
              Go Back &larr;{" "}
            </button>
            {/* </Link> */}
          </div>
        </div>
        <div className={styles.course_img}>
          <img src={`/images/${content.img}`} alt="" />
        </div>
      </div>
      <div className={styles.page_line}>
        <div>
          <span>{currIndex + 1}</span>/<span>{size}</span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
