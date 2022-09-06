import React, { useEffect, useState } from "react";
import styles from "./Schedule.module.css";
import PhnSidebar from "../../components/PhnSidebar/PhnSidebar";
import KnowledgeNavbar from "../../components/KnowledgeNavbar/KnowledgeNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "../../components/Calendar/Calendar.css";
import "../../components/TimePicker/TimePicker.css";
import "../../components/Clock/Clock.css";
import TimePicker from "react-time-picker";
import SelectTime from "../../components/SelectTime/SelectTime";
import { InlineWidget } from "react-calendly";

function Schedule() {
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
      <div className={styles.schedule}>
        <KnowledgeNavbar />
        <div className={styles.body}>
          <Sidebar isVisible={width >= 600 ? true : false} />
          <div className={styles.content}>
            <InlineWidget
              url="https://calendly.com/mauricerana/30min"
              styles={{
                width: "75vw",
                height: "100vh",
                overflowY: "hidden",
                backgroundColor: "transparent",
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
