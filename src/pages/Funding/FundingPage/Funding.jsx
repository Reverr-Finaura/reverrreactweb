import React, { useEffect, useState } from "react";
import KnowledgeNavbar from "../../../components/KnowledgeNavbar/KnowledgeNavbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import PhnSidebar from "../../../components/PhnSidebar/PhnSidebar";
import styles from "../../Mentors/Mentors.module.css";
import Footer from "../../Footer/Footer";
import "animate.css";
import "../FundingPage/funding.module.css";
function Funding() {
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
            <div className={styles.funding__flex}>
              <div className={styles.heading}>
                <h1>Funding</h1>
              </div>
              <div className={styles.funding__para}>
                <span className={styles.textcolor}>
                  Applying with profile is too much work?
                </span>
                <br /> Join our Private Fundings and save your time
              </div>
              <div className={styles.funding__para}>
                <span className={styles.textcolor}>Register as a </span>
                Start-up <br /> and <br />
                <span className={styles.textcolor}>
                  start fundings privately
                </span>
              </div>
              <button className={styles.funding__btn}>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Funding;
