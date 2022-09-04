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

function Schedule() {
  const [width, setWidth] = useState(window.innerWidth);
  const [date, setDate] = useState();
  const [time, setTime] = useState("10:00");
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const selectDate = (date) => {
    setDate(date);
  };

  const selectTime = (time) => {
    setTime(time);
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
            <div className={styles.search}>
              <img src="./images/searchicon.png" alt="search" />
              <input type="text" placeholder="Search here" />
            </div>
            {!date && <Calendar onChange={selectDate} value={date} />}
            {date && (
              <div>
                <TimePicker onChange={selectTime} value={time} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Schedule;
