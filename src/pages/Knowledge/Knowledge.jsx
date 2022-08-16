import React, { useState } from "react";
import Chapter from "../../components/Chapter/Chapter";
import Footer from "../Footer/Footer";
import styles from "./Knowledge.module.css";
import "animate.css";

function Knowledge() {
  const [booksSelected, setBooksSeleceted] = useState(false);
  const [journeySelected, setJourneySeleceted] = useState(true);
  const [coursesSelected, setCoursesSeleceted] = useState(false);
  const [isHoveringSidebar, setIsHoveringSidebar] = useState(false);
  const [phnOptionsVisible, setPhnOptionsVisible] = useState(false);

  const selectBooks = () => {
    setBooksSeleceted(true);
    setJourneySeleceted(false);
    setCoursesSeleceted(false);
  };
  const selectJourney = () => {
    setBooksSeleceted(false);
    setJourneySeleceted(true);
    setCoursesSeleceted(false);
  };
  const selectCourses = () => {
    setBooksSeleceted(false);
    setJourneySeleceted(false);
    setCoursesSeleceted(true);
  };

  return (
    <div className={styles.knowledge}>
      <navbar className={styles.navbar}>
        <div
          onClick={() => setPhnOptionsVisible(!phnOptionsVisible)}
          className={styles.logo}
        >
          <img src="./images/Reverr Black 1.png" alt="" />
          <p>REVERR</p>
        </div>
        <div className={styles.options}>
          <div>
            <img src="./images/bell.png" alt="" />
          </div>
          <div>
            <img src="./images/ant-design_question-circle-filled.png" alt="" />
          </div>
          <div>
            <img src="./images/uim_calender.png" alt="" />
          </div>
          <div>
            <img src="./images/ant-design_message-twotone.png" alt="" />
          </div>
          <div>
            <img src="./images/Group.png" alt="" />
          </div>
        </div>
        <div
          style={{ display: phnOptionsVisible ? "flex" : "none" }}
          className={`${styles.phnOptions} animate__animated animate__fadeIn`}
        >
          <div>
            <img src="./images/bell.png" alt="" />
          </div>
          <div>
            <img src="./images/ant-design_question-circle-filled.png" alt="" />
          </div>
          <div>
            <img src="./images/uim_calender.png" alt="" />
          </div>
          <div>
            <img src="./images/ant-design_message-twotone.png" alt="" />
          </div>
          <div>
            <img src="./images/Group.png" alt="" />
          </div>
        </div>
      </navbar>
      <div className={styles.body}>
        <div
          style={{
            padding: isHoveringSidebar ? "1rem 10rem 1rem 1rem" : "1rem",
          }}
          className={styles.sidebar}
          onMouseOver={() => setIsHoveringSidebar(true)}
          onMouseOut={() => setIsHoveringSidebar(false)}
        >
          <div className={styles.sidebarOption}>
            <img src="./images/dashboard.png" alt="" />
            <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
              Dashboard
            </p>
          </div>
          <div className={styles.sidebarOption}>
            <img src="./images/presentation.png" alt="" />
            <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
              Tools
            </p>
          </div>
          <div className={styles.sidebarOption}>
            <img src="./images/brain.png" alt="" />
            <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
              Knowledge
            </p>
          </div>
          <div className={styles.sidebarOption}>
            <img src="./images/wallet.png" alt="" />
            <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
              Funding
            </p>
          </div>
          <div className={styles.sidebarOption}>
            <img src="./images/video.png" alt="" />
            <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
              Patch
            </p>
          </div>
          <div className={styles.sidebarOption}>
            <img src="./images/bookopen.png" alt="" />
            <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
              Get Mentored
            </p>
          </div>
          <div className={styles.sidebarOption}>
            <img src="./images/handshake.png" alt="" />
            <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
              Community
            </p>
          </div>
          <div className={styles.sidebarOption}>
            <img src="./images/crown.png" alt="" />
            <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
              Upgrade
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.search}>
            <img src="./images/searchicon.png" alt="search" />
            <input type="text" placeholder="Search here" />
          </div>
          <div className={styles.headings}>
            <div
              onClick={selectBooks}
              style={{ fontSize: booksSelected && "45px" }}
              className={styles.heading}
            >
              <p>Books</p>
            </div>
            <div
              onClick={selectJourney}
              style={{ fontSize: journeySelected && "45px" }}
              className={styles.heading}
            >
              <p>The Journey</p>
            </div>
            <div
              onClick={selectCourses}
              style={{ fontSize: coursesSelected && "45px" }}
              className={styles.heading}
            >
              <p>Courses</p>
            </div>
          </div>
          <div className={styles.sectionDescription}>
            <p
              style={{ display: journeySelected ? "block" : "none" }}
              className={styles.text}
            >
              The Series of 14 courses that will help you to understand
              <span className={styles.journeyPartText}>
                {" "}
                “What is a Start-Up & how does it work”.
              </span>
              It will teach you from basic to advance concept
            </p>
            <p
              style={{ display: coursesSelected ? "block" : "none" }}
              className={styles.text}
            >
              Most Important and Trending courses that will help you in your
              Start-up Journey.
            </p>
            <p
              style={{ display: booksSelected ? "block" : "none" }}
              className={styles.text}
            >
              Most Important and Trending books that will help you in your
              Start-up Journey.
            </p>
          </div>
          <section
            style={{ display: journeySelected ? "flex" : "none" }}
            className={styles.chapters}
          >
            <Chapter
              heading="Chapter - 01"
              status="completed"
              description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
            />
            <Chapter
              heading="Chapter - 02"
              status="available"
              description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
            />
            <Chapter
              heading="Chapter - 03"
              status="locked"
              description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
            />
            <Chapter
              heading="Chapter - 04"
              status="locked"
              description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
            />
            <Chapter
              heading="Chapter - 05"
              status="locked"
              description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
            />
            <Chapter
              heading="Chapter - 06"
              status="locked"
              description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
            />
            <Chapter
              heading="Chapter - 07"
              status="locked"
              description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
            />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Knowledge;
