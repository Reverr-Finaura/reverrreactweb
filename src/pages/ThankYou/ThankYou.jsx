import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ThankYou.module.css";
import PhnSidebar from "../../components/PhnSidebar/PhnSidebar";
import Footer from "../Footer/Footer";
import KnowledgeNavbar from "../../components/KnowledgeNavbar/KnowledgeNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  getMentorFromDatabase,
  getUserFromDatabase,
  updateMentorInDatabse,
  updateUserInDatabse,
} from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { selectMentor } from "../../features/scheduleSlice";

function ThankYou() {
  const user = useSelector(selectUser);
  const mentor = useSelector(selectMentor);
  const [fetchedUser, setFetchedUser] = useState("");
  const [fetchedMentor, setFetchedMentor] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const { mentorEmail } = useParams();
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const getUser = useCallback(async () => {
    const results = await getUserFromDatabase(user.uid, "Users");
    setFetchedUser(results);
  }, []);

  const getMentor = useCallback(async () => {
    const results = await getMentorFromDatabase(mentorEmail, "Users");
    setFetchedMentor(results);
  }, []);

  useEffect(() => {
    getUser();
    getMentor();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  async function handleConfirm(e) {
    e.preventDefault();
    await updateUserInDatabse(user.uid, "Users", {
      meetings: [{ email: mentorEmail, date, time }],
    });

    await updateMentorInDatabse(mentor.email, "Users", {
      meetings: [{ email: user.email, date, time }],
    });
  }

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
                  <input type="date" onChange={handleDateChange} value={date} />
                </div>
                <div>
                  <input type="time" onChange={handleTimeChange} value={time} />
                </div>
                <button onClick={handleConfirm}>Confirm</button>
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
