import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ThankYou.module.css";
import PhnSidebar from "../../components/PhnSidebar/PhnSidebar";
import Footer from "../Footer/Footer";
import KnowledgeNavbar from "../../components/KnowledgeNavbar/KnowledgeNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";

function ThankYou() {
  const { mentorEmail } = useParams();
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
      <div className={styles.thankyou}>
        <KnowledgeNavbar />
        <div className={styles.body}>
          <Sidebar isVisible={width >= 600 ? true : false} />
          <div className={styles.content}>
            <div className={styles.search}>
              <img src="/images/searchicon.png" alt="search" />
              <input type="text" placeholder="Search here" />
            </div>
            <div className={styles.main}>
              <h1>Confirm the details of your meeting with {mentorEmail}</h1>
              <form className={styles.form}>
                <div>
                  <input type="date" />
                </div>
                <div>
                  <input type="time" />
                </div>
                <button>Confirm</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ThankYou;
