import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./Confirmation.module.css";

const Confirmation = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <Header />
      <section
        className={styles.confirm_section_1}
        style={{ display: !isVisible ? "none" : "block" }}
      >
        <h1>Do you have a Start-Up?</h1>

        <button
          className={styles.confirm_btn}
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Yes
        </button>
        {/* </Link> */}
      </section>

      <section className={`${styles.confirm_section_2}`} id="try">
        <h1>That's great!!</h1>
        <h1> Let's get your start-up verified..</h1>
        <div className={styles.btns_div}>
          <Link to="/startup-onboarding">
            <button className={styles.confirm_btn}>Get Verified</button>
          </Link>
          <Link to="/">
            <button className={styles.back_btn}>Go Home</button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Confirmation;
