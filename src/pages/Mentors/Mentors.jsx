import React, { useEffect, useState } from "react";
import KnowledgeNavbar from "../../components/KnowledgeNavbar/KnowledgeNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import PhnSidebar from "../../components/PhnSidebar/PhnSidebar";
import styles from "./Mentors.module.css";
import Footer from "../Footer/Footer";
import MentorOfWeek from "../../components/MentorOfWeek/MentorOfWeek";
import Expertise from "../../components/Expertise/Expertise";
import "animate.css";

function Mentors() {
  const mentorOfWeek = [
    { id: 1, name: "Tonnie Kimera", img: "mentor1.svg" },
    { id: 2, name: "Jimmy Joel", img: "mentor2.svg" },
    { id: 3, name: "Harry Notch", img: "mentor3.svg" },
    { id: 4, name: "Vuiltion keane", img: "mentor4.svg" },
  ];

  const [width, setWidth] = useState(window.innerWidth);
  const [expertiseSelected, setExpertiseSelected] = useState(true);
  const [industrySelected, setIndustrySelected] = useState(false);

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
            <div className={styles.heading}>
              <h1>Find the Best Mentor</h1>
            </div>
            <div className={styles.week}>
              <p>
                <b>Mentor of Week</b>
              </p>
              <div className={styles.mentorofweek}>
                {mentorOfWeek.map((mentor) => (
                  <MentorOfWeek
                    key={mentor.id}
                    name={mentor.name}
                    img={mentor.img}
                  />
                ))}
              </div>
            </div>
            <div className={styles.selector}>
              <div
                className={styles.selectorButton}
                onClick={() => {
                  setExpertiseSelected(true);
                  setIndustrySelected(false);
                }}
              >
                <p
                  style={{
                    color: expertiseSelected
                      ? "rgba(32, 32, 32, 1)"
                      : "rgba(32, 32, 32, 0.75)",
                  }}
                  className={styles.option}
                >
                  Expertise
                </p>
              </div>
              <div
                className={styles.selectorButton}
                onClick={() => {
                  setExpertiseSelected(false);
                  setIndustrySelected(true);
                }}
              >
                <p
                  style={{
                    color: industrySelected
                      ? "rgba(32, 32, 32, 1)"
                      : "rgba(32, 32, 32, 0.75)",
                  }}
                  className={styles.option}
                >
                  Industry
                </p>
              </div>
            </div>
            {expertiseSelected ? (
              <div className="animate__animated animate__fadeInUp">
                <div className={styles.expertiseRow}>
                  <Expertise
                    img="./images/bussiness.svg"
                    name="Bussiness"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                  />
                  <Expertise
                    img="./images/bussiness.svg"
                    name="Bussiness"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                  />
                </div>
                <div className={styles.expertiseRow}>
                  <Expertise
                    img="./images/bussiness.svg"
                    name="Bussiness"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                  />
                  <Expertise
                    img="./images/bussiness.svg"
                    name="Bussiness"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                  />
                </div>
                <div className={styles.expertiseRow}>
                  <Expertise
                    img="./images/bussiness.svg"
                    name="Bussiness"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                  />
                  <Expertise
                    img="./images/bussiness.svg"
                    name="Bussiness"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Mentors;
