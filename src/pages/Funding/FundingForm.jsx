import React, { useEffect, useState } from "react";
import styles from "../MentorForm/MentorForm.module.css";
import Footer from "../Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import KnowledgeNavbar from "../../components/KnowledgeNavbar/KnowledgeNavbar";
import PhnSidebar from "../../components/PhnSidebar/PhnSidebar";

function FundingForm() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <>
      <PhnSidebar />
      <div className={styles.knowledge}>
        <KnowledgeNavbar />
        <div className={styles.body}>
          <Sidebar isVisible={width >= 600 ? true : false} />
          <div className={styles.content}>
            <div className={styles.search}>
              <img src="./images/searchicon.png" alt="search" />
              <input type="text" placeholder="Search here" />
            </div>
            <div className={styles.form_container}>
              <div className={styles.personal_details}>
                <h1 className={styles.heading}>Public Funding</h1>
                <div className={styles.form__heading}>Apply with Profile</div>
                <textarea name="" id="" placeholder="Add Bio"></textarea>
                {/* <div className={styles.input_flex}>
          <input type="text" name="" id="" placeholder="Full name" />
          <input type="text" name="" id="" placeholder="Last name" />
        </div> */}

                <input
                  type="text"
                  className={styles.input}
                  name=""
                  id=""
                  placeholder="Work"
                />
                <input
                  type="text"
                  className={styles.input}
                  name=""
                  id=""
                  placeholder="Title"
                />
                <input
                  type="text"
                  className={styles.input}
                  name=""
                  id=""
                  placeholder="Company"
                />
                <div className={styles.input_flex}>
                  <input
                    type="text"
                    className={styles.input}
                    name=""
                    id=""
                    placeholder="From"
                  />
                  <input
                    type="text"
                    className={styles.input}
                    name=""
                    id=""
                    placeholder="To"
                  />
                </div>
                <input
                  type="text"
                  className={styles.input}
                  name=""
                  id=""
                  placeholder="Education"
                />
                <input
                  type="text"
                  className={styles.input}
                  name=""
                  id=""
                  placeholder="Gender"
                />
                <input
                  type="text"
                  className={styles.input}
                  name=""
                  id=""
                  placeholder="Location"
                />
                <input
                  type="text"
                  className={styles.input}
                  name=""
                  id=""
                  placeholder="Hometown"
                />
                <input
                  type="text"
                  className={styles.input}
                  name=""
                  id=""
                  placeholder="Looking for"
                />
                <input
                  type="text"
                  className={styles.input}
                  name=""
                  id=""
                  placeholder="Industry"
                />
                <input
                  type="text"
                  className={styles.input}
                  name=""
                  id=""
                  placeholder="Years of Experience"
                />
                <div className={styles.form__heading}>Interests</div>
                <div className={styles.input_flex}>
                  <input type="text" className={styles.input} name="" id="" />
                  <input type="text" className={styles.input} name="" id="" />
                  <input type="text" className={styles.input} name="" id="" />
                </div>

                <div className={styles.form__heading}>How can we meet</div>
                <div className={styles.social__flex}>
                  <img
                    className={styles.social__icons}
                    src="/images/twitter3d.png"
                    alt=""
                  />
                  <input className={styles.input} type="text" name="" id="" />
                </div>
                <div className={styles.social__flex}>
                  <img
                    className={styles.social__icons}
                    src="/images/linkedIn3d.png"
                    alt=""
                  />
                  <input className={styles.input} type="text" name="" id="" />
                </div>
              </div>
              <button className={styles.apply__btn}>Apply Now</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default FundingForm;
