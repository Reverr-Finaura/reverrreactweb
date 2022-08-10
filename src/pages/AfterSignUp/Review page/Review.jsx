import React from "react";
import styles from "./Review.module.css";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <>
      <section className={styles.review_section}>
        <div className={styles.review_intro}>
          <div className={styles.review_note}>
            <h1>
              Wait for your Start-up to get reviewed by us ! We will get back to
              you in 24 hours !
            </h1>
            <p>Till then, Let's add more details to your profile</p>
          </div>
          <div className={styles.review_img}>
            <img src="/images/review-img.svg" alt="" />
          </div>
        </div>
        <div className={styles.review_btns}>
          <Link to="/">
            <button className={styles.next_btn}>Next</button>
          </Link>
          <Link to="/">
            <button className={styles.skip_btn}>Skip</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Review;
