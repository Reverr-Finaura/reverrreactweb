import React, { useEffect, useState } from "react";
import Chapter from "../../components/Chapter/Chapter";
import PhnSidebar from "../../components/PhnSidebar/PhnSidebar";
import Footer from "../Footer/Footer";
import Filter from "../../components/Book filter menu/Filter";
import styles from "./Knowledge.module.css";
import "animate.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import KnowledgeNavbar from "../../components/KnowledgeNavbar/KnowledgeNavbar";

function Knowledge() {
  const [booksSelected, setBooksSeleceted] = useState(false);
  const [journeySelected, setJourneySeleceted] = useState(true);
  const [coursesSelected, setCoursesSeleceted] = useState(false);
  const [filterMenuVisible, setFilterMenuVisible] = useState(false);
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
            <div className={styles.headings}>
              {/* <div
                onClick={selectBooks}
                style={{ fontSize: booksSelected && "45px" }}
                className={styles.heading}
              >
                <p>Books</p>
              </div> */}
              <div
                onClick={selectJourney}
                style={{ fontSize: journeySelected && "45px" }}
                className={styles.heading}
              >
                <p>The Journey</p>
              </div>
              {/* <div
                onClick={selectCourses}
                style={{ fontSize: coursesSelected && "45px" }}
                className={styles.heading}
              >
                <p>Courses</p>
              </div> */}
            </div>
            <div className={styles.sectionDescription}>
              <p
                style={{ display: journeySelected ? "block" : "none" }}
                className={styles.text}
              >
                The Series of 14 courses that will help you to understand
                <span className={styles.journeyPartText}>
                  {" "}
                  ???What is a Start-Up & how does it work???.
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
                courseImage="/images/chapter1.svg"
                heading="Legal - ESOP"
                status="completed"
                description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
                url="/esop"
              />
              <Chapter
                courseImage="/images/chapter2.svg"
                heading="Idea Validation"
                status="available"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
                url="/idea-validation"
              />
              <Chapter
                courseImage="/images/chapter3.svg"
                heading="Fundraising and its Means"
                status="available"
                description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
                url="/fundraising-and-means"
              />
              <Chapter
                courseImage="/images/chapter4.svg"
                heading="Reaching Out to Investor"
                status="available"
                description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
                url="/reaching-out-to-investor"
              />
              <Chapter
                courseImage="/images/chapter5.svg"
                heading="Social Media"
                status="available"
                description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
                url="/social-media"
              />
              <Chapter
                courseImage="/images/chapter6.svg"
                heading="Beta Testing"
                status="available"
                description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
                url="/betatesting"
              />
              <Chapter
                courseImage="/images/chapter7.svg"
                heading="Business Modal"
                status="available"
                description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
                url="/businessmodal"
              />

              <Chapter
                courseImage="/images/chapter8.svg"
                heading="Business Planning"
                status="available"
                description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
                url="/businessplanning"
              />

              <Chapter
                courseImage="/images/chapter9.svg"
                heading="Competitor Analysis"
                status="available"
                description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
                url="/competitoranalysis"
              />

              <Chapter
                courseImage="/images/chapter10.svg"
                heading="Product Development"
                status="available"
                description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
                url="/productdevelopment"
              />

              <Chapter
                courseImage="/images/chapter11.svg"
                heading="THINKING OF A STARTUP IDEA & IDEA SHORTLISTING"
                status="available"
                description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
                url="/thinkingofstartup"
              />

              <Chapter
                courseImage="/images/chapter12.svg"
                heading="Building an Audience"
                status="available"
                description="    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor"
                url="/buildingaudience"
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
                    <img src="/images/book1.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book2.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book3.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book4.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book1.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book2.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book3.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book4.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book1.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book2.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book3.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                  <div className={styles.book}>
                    <img src="/images/book4.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero ut soluta perspiciatis dicta voluptatibus totam!
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Courses Section */}
            <section
              className={styles.book_section}
              style={{ display: !coursesSelected && "none" }}
            >
              <div>
                <h1 className={styles.courses__heading}>
                  Culture and Operation
                </h1>
                <div className={styles.courses__flex}>
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
                <h1 className={styles.courses__heading}>Fund Raising</h1>
                <div className={styles.courses__flex}>
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
                <h1 className={styles.courses__heading}>
                  Ideation and Feasibility
                </h1>
                <div className={styles.courses__flex}>
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
                <h1 className={styles.courses__heading}>Founder Development</h1>
                <div className={styles.courses__flex}>
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
                <h1 className={styles.courses__heading}>Legal</h1>
                <div className={styles.courses__flex}>
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
                <h1 className={styles.courses__heading}>Product Development</h1>
                <div className={styles.courses__flex}>
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
                <h1 className={styles.courses__heading}>Sales and Marketing</h1>
                <div className={styles.courses__flex}>
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
