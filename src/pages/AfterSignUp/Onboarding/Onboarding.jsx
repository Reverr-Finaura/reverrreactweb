import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./Onboarding.module.css";

const Onboarding = () => {
  return (
    <>
      <Header />
      <section className={styles.onboard_section}>
        <div className={styles.onboard_intro}>
          <h1>Tell Us About You</h1>
          <p>
            To invest with REVERR, you must first grasp the fundamentals of
            startup investment. Please confirm that you are aware of the
            following point and the regulations
          </p>
        </div>
        <div className={styles.onboard_details}>
          <div className={styles.onboard_input}>
            <h3>1. Tell us your previos organisation you have worked with</h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click “Edit Text” or double click me to add your own
              content.
            </p>
            <input type="text" name="" placeholder="Organisation Name" id="" />
          </div>

          <div className={styles.onboard_input}>
            <h3>2. What was your designation?</h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click “Edit Text” or double click me to add your own
              content.
            </p>
            <input type="text" name="" placeholder="Designation" id="" />
          </div>

          <div className={styles.onboard_input}>
            <h3>3. Duration you worked with the organisation</h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click “Edit Text” or double click me to add your own
              content.
            </p>
            <input type="text" name="" placeholder="Type in years" id="" />
          </div>

          <div className={styles.onboard_input}>
            <h3>4. What was your role in the organisation</h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click “Edit Text” or double click me to add your own
              content.
            </p>
            <textarea placeholder="Your role" />
          </div>
          <div className={styles.next_btn}>
            <Link to="">
              <button>Next</button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Onboarding;
