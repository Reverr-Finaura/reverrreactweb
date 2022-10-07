import React, { useEffect, useState } from "react";
import KnowledgeNavbar from "../../components/KnowledgeNavbar/KnowledgeNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import PhnSidebar from "../../components/PhnSidebar/PhnSidebar";
import styles from "./Dashboard.module.css";
import Footer from "../Footer/Footer";

function Dashboard() {
  const [width, setWidth] = useState(window.innerWidth);
  const [index, setIndex] = useState(0);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const slides = [
    {
      quote:
        "Your reputation is more important than your paycheck, and your integrity is worth more than your career.      ",
      author: " Joshua Johnson ",
      // bg: "red",
    },
    {
      quote:
        "Your reputation is more important than your paycheck, and your integrity is worth more than your career.      ",
      author: " Joshua Johnson ",
      // bg: "yellow",
    },
    {
      quote:
        "Your reputation is more important than your paycheck, and your integrity is worth more than your career.      ",
      author: " Joshua Johnson ",
      // bg: "green",
    },
  ];

  const meeting = [
    {
      profile: "/images/meet-profile.svg",
      mentor: "Ruhan",
      time: "10:00 Am - 11:00 Am",
    },
  ];

  const mentors = [
    {
      profile: "/images/m1.svg",
      name: "Akansha Silavai",
      field: "Finance Specialist",
    },
    {
      profile: "/images/m2.svg",
      name: "Arunesh darwai",
      field: "Finance Specialist",
    },
  ];

  const carouselInfiniteScroll = () => {
    if (index === slides.length - 1) {
      return setIndex(0);
    }
    return setIndex(index + 1);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     carouselInfiniteScroll();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // });

  return (
    <>
      <PhnSidebar />
      <div className={styles.dashboard}>
        <KnowledgeNavbar />
        <div className={styles.body}>
          <Sidebar isVisible={width >= 600 ? true : false} />
          <div className={styles.content}>
            <div className={styles.mentor_greeting}>
              <h1>Welcome!👋🏻</h1>
            </div>
            <div className={styles.mentor_detail}>
              <img src="/images/Ellipse 387.svg" alt="" />
              <div className={styles.mentor_info}>
                <h3>John Doe</h3>
                <p>Start-up Owner</p>
              </div>
            </div>
            <div className={styles.quoteNmeeting}>
              <div className={styles.getQuote}>
                <div
                  className={styles.slider}
                  style={{ transform: `translate(-${index * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={styles.slide}
                      style={{ backgroundColor: "#e6e6e6" }}
                    >
                      <h1>{slide.quote}</h1>
                      <p>{slide.author}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.meetings}>
                <h3>Upcoming Meetings</h3>
                {meeting.map((m, index) => (
                  <div key={index} className={styles.meeting}>
                    <img src={m.profile} alt="" />
                    <div className={styles.meeting_info}>
                      <h5>Connect with {m.mentor}</h5>
                      <p>{m.time}</p>
                    </div>
                    <button>Reschedule</button>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.mentorship}>
              <div className={styles.funding_card}>
                <img src="/images/Mask group.svg" alt="" />
                <h3>
                  We have got just the patform for you to apply for funding
                </h3>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It's easy. Just click “Edit Text” or double click me to add
                  content.I'm a paragraph. Click here to add your own text and
                  edit me. It's easy. Just click “Edit Text” or double click me
                  to add content.
                </p>
                <button>Apply for Funding</button>
              </div>
              <div className={styles.contact_mentor}>
                <h3>Take Mentorship</h3>
                {mentors.map((m, index) => (
                  <div key={index} className={styles.contact}>
                    <img src={m.profile} alt="" />
                    <div className={styles.mentor_info}>
                      <h5> {m.name}</h5>
                      <p>{m.field}</p>
                    </div>
                    <button>Contact Now</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
