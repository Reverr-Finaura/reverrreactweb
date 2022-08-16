import React, { useEffect, useState } from "react";
import Chapter from "../../components/Chapter/Chapter";
import Footer from "../Footer/Footer";
import Filter from "../../components/Book filter menu/Filter";
import styles from "./Knowledge.module.css";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import "animate.css";

function Knowledge() {
  const [booksSelected, setBooksSeleceted] = useState(false);
  const [journeySelected, setJourneySeleceted] = useState(true);
  const [coursesSelected, setCoursesSeleceted] = useState(false);
  const [filterMenuVisible, setFilterMenuVisible] = useState(false);
  const [isHoveringSidebar, setIsHoveringSidebar] = useState(false);
  const [phnOptionsVisible, setPhnOptionsVisible] = useState(false);
  const [phnSidebarVisible, setPhnSidebarVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

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
    <>
      <div
        style={{
          display: phnSidebarVisible && width <= 600 ? "flex" : "none",
        }}
        className={`${styles.phnSidebar} animate__animated 
        animate__slideInLeft animate__faster`}
      >
        <div
          onClick={() => {
            setPhnSidebarVisible(false);
          }}
          className={styles.phnSidebarOption}
        >
          <XIcon className={styles.xicon} />
        </div>
        <div className={styles.phnSidebarOption}>
          <img src="./images/dashboard.png" alt="" />
          <p>Dashboard</p>
        </div>
        <div className={styles.phnSidebarOption}>
          <img src="./images/presentation.png" alt="" />
          <p>Tools</p>
        </div>
        <div className={styles.phnSidebarOption}>
          <img src="./images/brain.png" alt="" />
          <p>Knowledge</p>
        </div>
        <div className={styles.phnSidebarOption}>
          <img src="./images/wallet.png" alt="" />
          <p>Funding</p>
        </div>
        <div className={styles.phnSidebarOption}>
          <img src="./images/video.png" alt="" />
          <p>Patch</p>
        </div>
        <div className={styles.phnSidebarOption}>
          <img src="./images/bookopen.png" alt="" />
          <p>Get Mentored</p>
        </div>
        <div className={styles.phnSidebarOption}>
          <img src="./images/handshake.png" alt="" />
          <p>Community</p>
        </div>
        <div className={styles.phnSidebarOption}>
          <img src="./images/crown.png" alt="" />
          <p>Upgrade</p>
        </div>
      </div>
      <div className={styles.knowledge}>
        <navbar className={styles.navbar}>
          <MenuIcon
            onClick={() => setPhnSidebarVisible(true)}
            className={styles.menuIcon}
          />
          <div
            className={styles.logo}
            onClick={() => setPhnOptionsVisible(!phnOptionsVisible)}
          >
            <img src="./images/Reverr Black 1.png" alt="" />
            <p>REVERR</p>
          </div>
          <div className={styles.options}>
            <div>
              <img src="./images/bell.png" alt="" />
            </div>
            <div>
              <img
                src="./images/ant-design_question-circle-filled.png"
                alt=""
              />
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
            style={{
              display: phnOptionsVisible && width <= 600 ? "flex" : "none",
            }}
            className={`${styles.phnOptions} animate__animated animate__fadeIn`}
          >
            <div>
              <img src="./images/bell.png" alt="" />
            </div>
            <div>
              <img
                src="./images/ant-design_question-circle-filled.png"
                alt=""
              />
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

            {/* Book Section */}
            <section
              className={styles.book_section}
              style={{ display: !booksSelected && "none" }}
            >
              <div>
                <div className={styles.book_filter_btn}>
                  <img
                    src="/images/Vector.svg"
                    alt=""
                    onClick={() => setFilterMenuVisible(!filterMenuVisible)}
                  />
                </div>
                <Filter visible={filterMenuVisible} />
                <div className={styles.books}>
                  <div className={styles.book}>
                    <img src="/images/book_dummy.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book_dummy.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book_dummy.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book_dummy.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book_dummy.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book_dummy.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book_dummy.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book_dummy.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book_dummy.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book_dummy.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book_dummy.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book_dummy.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Knowledge;
