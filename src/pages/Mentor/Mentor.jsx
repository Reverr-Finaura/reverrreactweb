import React, { useEffect, useState } from "react";
import styles from "./Mentor.module.css";
import KnowledgeNavbar from "../../components/KnowledgeNavbar/KnowledgeNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import PhnSidebar from "../../components/PhnSidebar/PhnSidebar";
import Footer from "../Footer/Footer";
import MentorComponent from "../../components/MentorComponent/MentorComponent";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";

function Mentor() {
  const { type } = useParams();
  const [width, setWidth] = useState(window.innerWidth);
  const [mentorsArray, setMentorsArray] = useState([]);
  const [usersArray, setUsersArray] = useState([]);
  const data = [];
  const data2 = [];
  const data3 = [];

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    async function fetchMentors() {
      const mentorsRef = collection(db, "Expertise");
      const q = query(mentorsRef, where("name", "==", type));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setMentorsArray(data);
    }

    fetchMentors();
  }, []);

  useEffect(() => {
    async function fetchMentors() {
      const usersRef = collection(db, "Users");
      const q = query(usersRef, where("userType", "==", "Mentor"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data2.push(doc.data());
      });
      setUsersArray(data2);
    }

    fetchMentors();
  }, []);

  function format() {
    for (var i = 0; i < mentorsArray[0]?.mentors.length; i++) {
      for (var j = 0; j < usersArray.length; j++) {
        if (mentorsArray[0]?.mentors[i] === usersArray[j].name) {
          data3.push({ name: mentorsArray[0]?.mentors[i], ...usersArray[j] });
        }
      }
    }
  }

  format();
  console.log(data3);

  return (
    <>
      <PhnSidebar />
      <div className={styles.knowledge}>
        <KnowledgeNavbar />
        <div className={styles.body}>
          <Sidebar isVisible={width >= 600 ? true : false} />
          <div className={styles.content}>
            <div className={styles.search}>
              <img src="/images/searchicon.png" alt="search" />
              <input type="text" placeholder="Search here" />
            </div>
            <div className={styles.heading}>
              <h1>{type} Mentors</h1>
            </div>
            <div className={styles.mentors}>
              {data3.map((item, index) => (
                <MentorComponent
                  key={index + Math.random()}
                  name={item.name}
                  img={item?.image}
                  type={type}
                  rating={item?.Rating}
                  to={item?.email}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Mentor;
