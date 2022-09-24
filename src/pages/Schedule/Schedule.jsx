import React, { useEffect, useState } from "react";
import styles from "./Schedule.module.css";
import PhnSidebar from "../../components/PhnSidebar/PhnSidebar";
import KnowledgeNavbar from "../../components/KnowledgeNavbar/KnowledgeNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "../../components/Calendar/Calendar.css";
import "../../components/TimePicker/TimePicker.css";
import "../../components/Clock/Clock.css";
import { InlineWidget } from "react-calendly";
import "animate.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Schedule() {
  const [width, setWidth] = useState(window.innerWidth);
  const { mentorEmail } = useParams();
  const user = useSelector(selectUser);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const prefill = {
    email: user?.email,
    name: user?.displayName,
    guests: [mentorEmail?.toString()],
    date: new Date(Date.now() + 86400000),
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <>
      <PhnSidebar />
      <div className={styles.schedule}>
        <KnowledgeNavbar />
        <div className={styles.body}>
          <Sidebar isVisible={width >= 600 ? true : false} />
          <div
            className={`animate__animated animate__fadeInUp ${styles.content}`}
          >
            <InlineWidget
              url="https://calendly.com/mauricerana/30min"
              prefill={prefill}
              styles={{
                width: "75vw",
                height: "100vh",
                overflowY: "hidden",
                backgroundImage:
                  "linear-gradient(-45deg, rgba(246,246,246,1), rgba(42, 114, 222, 0.15))",
                padding: "0",
                border: "3px solid rgba(42, 114, 222, 1)",
                borderRadius: "1rem",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Schedule;
