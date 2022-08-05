import React from "react";

import styles from "./header.module.css";

const Header = () => {
  return (
    <section className={styles.headerContainer}>
      <button className={styles.logo}>
        <img src={"/images/reaver-logo.svg"} alt="" />
        <img src={"/images/reaver-text.svg"} alt="" />
      </button>
      <div className={styles.buttonRow}>
        <button className={styles.navButton}>Investors</button>
        <button className={styles.navButton}>Founders</button>
        <button className={styles.navButton}>Members</button>
        <button className={styles.navButton}>About Us</button>
        <button className={styles.navButton}>Contact Us</button>
        <button className={styles.authButton}>
          <svg
            width="163"
            height="47"
            viewBox="0 0 163 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.948542 46.0036L32.2629 0.5H162.046L130.239 46.499L0.948542 46.0036Z"
              fill="url(#paint0_linear_4010_18318)"
              stroke="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4010_18318"
                x1="159.559"
                y1="0.915589"
                x2="117.204"
                y2="98.0869"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.231523" stop-color="#012437" />
                <stop offset="1" stop-color="#8C96FD" stop-opacity="0.42" />
              </linearGradient>
            </defs>
          </svg>
          <div className={styles.authButtonTextContainer}>
            <span className={styles.authButtonText}>Sign Up</span>
          </div>
        </button>

        <button className={styles.authButton}>
          <svg
            width="163"
            height="47"
            viewBox="0 0 163 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.948542 46.0036L32.2629 0.5H162.046L130.239 46.499L0.948542 46.0036Z"
              fill="url(#paint0_linear_4010_18318)"
              stroke="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4010_18318"
                x1="159.559"
                y1="0.915589"
                x2="117.204"
                y2="98.0869"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.231523" stop-color="#012437" />
                <stop offset="1" stop-color="#8C96FD" stop-opacity="0.42" />
              </linearGradient>
            </defs>
          </svg>
          <div className={styles.authButtonTextContainer}>
            <span className={styles.authButtonText}>Login</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Header;
