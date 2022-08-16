import React, { useState } from "react";
import Filter from "../../components/Book filter menu/Filter";
import styles from "./Knowledge.module.css";

function Knowledge() {
  const [booksSelected, setBooksSeleceted] = useState(false);
  const [journeySelected, setJourneySeleceted] = useState(true);
  const [coursesSelected, setCoursesSeleceted] = useState(false);
  const [filterMenuVisible, setFilterMenuVisible] = useState(false);

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
      <div className={styles.knowledge}>
        <navbar className={styles.navbar}>
          <div className={styles.logo}>
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
        </navbar>
        <div className={styles.body}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarOption}>
              <img src="./images/dashboard.png" alt="" />
              <p>Dashboard</p>
            </div>
            <div className={styles.sidebarOption}>
              <img src="./images/presentation.png" alt="" />
              <p>Tools</p>
            </div>
            <div className={styles.sidebarOption}>
              <img src="./images/brain.png" alt="" />
              <p>Knowledge</p>
            </div>
            <div className={styles.sidebarOption}>
              <img src="./images/wallet.png" alt="" />
              <p>Funding</p>
            </div>
            <div className={styles.sidebarOption}>
              <img src="./images/video.png" alt="" />
              <p>Patch</p>
            </div>
            <div className={styles.sidebarOption}>
              <img src="./images/bookopen.png" alt="" />
              <p>Get Mentored</p>
            </div>
            <div className={styles.sidebarOption}>
              <img src="./images/handshake.png" alt="" />
              <p>Community</p>
            </div>
            <div className={styles.sidebarOption}>
              <img src="./images/crown.png" alt="" />
              <p>Upgrade</p>
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
                style={{ fontSize: booksSelected && "50px" }}
                className={styles.heading}
              >
                <p>Books</p>
              </div>
              <div
                onClick={selectJourney}
                style={{ fontSize: journeySelected && "50px" }}
                className={styles.heading}
              >
                <p>The Journey</p>
              </div>
              <div
                onClick={selectCourses}
                style={{ fontSize: coursesSelected && "50px" }}
                className={styles.heading}
              >
                <p>Courses</p>
              </div>
            </div>

            {/* Book Section */}
            <section
              className={styles.book_section}
              style={{ display: !booksSelected && "none" }}
            >
              <div>
                <p className={styles.book_para}>
                  Most Important and Trending books that will help you in your
                  Start-up Journey.
                </p>
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
    </>
  );
}

export default Knowledge;
