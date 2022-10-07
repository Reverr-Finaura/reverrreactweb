import React, { useEffect, useState } from "react";
import KnowledgeNavbar from "../../components/KnowledgeNavbar/KnowledgeNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import PhnSidebar from "../../components/PhnSidebar/PhnSidebar";
import styles from "./Dashboard.module.css";
import Footer from "../Footer/Footer";
import RecommendedCourse from "../../components/RecommendedCourse/RecommendedCourse";
import { Calendar } from "react-calendar";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";

import "react-calendar/dist/Calendar.css";
import Blog from "../../components/Blog/Blog";
import { Link } from "react-router-dom";

function Dashboard() {
  const [width, setWidth] = useState(window.innerWidth);
  const [blogsArray, setBlogsArray] = useState([]);
  const data = [];

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    async function getBlogs() {
      const blogRef = collection(db, "Blogs");
      const q = query(blogRef, limit(3));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setBlogsArray(data);
    }

    getBlogs();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <>
      <PhnSidebar />
      <div className={styles.dashboard}>
        <KnowledgeNavbar />
        <div className={styles.body}>
          <Sidebar isVisible={width >= 600 ? true : false} />
          <div className={styles.content}>
            <div className={styles.search}>
              <img src="./images/searchicon.png" alt="search" />
              <input type="text" placeholder="Search here" />
            </div>
            <section className={styles.section3}>
              <div className={styles.left}>
                <div className={styles.explore}>
                  <img src="/images/explore.svg" alt="explore" />
                  <div className={styles.exploreText}>
                    <p>
                      We know you are fond of learning so here is a little
                      something from our side to help you get acess to proper
                      knowledge so that you face no problems in your journey of
                      success to start-up.
                    </p>
                  </div>
                  <Link to="/knowledge" className={styles.explorelink}>
                    <button className={styles.exploreButton}>
                      Explore Courses
                    </button>
                  </Link>
                </div>
                <div className={styles.recommendedCourses}>
                  <p>
                    <b>Recommended Courses</b>
                  </p>
                  <RecommendedCourse
                    name="Fundrasing and Means"
                    url="/fundraising-and-means"
                  />
                  <RecommendedCourse
                    name="Reaching out to Invester"
                    url="/reaching-out-to-investor"
                  />
                  <RecommendedCourse
                    name="Bussiness Model"
                    url="/businessmodal"
                  />
                </div>
              </div>
              <div className={styles.right}>
                <Calendar />
              </div>
            </section>
            <section className={styles.section4}>
              <h1 className={styles.headingsec4}>
                Want to Explore more about Start-Up
              </h1>
              <div className={styles.blogs}>
                {blogsArray.map((item, index) => {
                  return (
                    <Blog
                      key={item.id}
                      img={item.image?.imageUrl}
                      name={item.heading}
                      body={item.body}
                    />
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
