import React, { useEffect, useState } from "react";
import styles from "./MentorProfile.module.css";
import PhnSidebar from "../../components/PhnSidebar/PhnSidebar";
import KnowledgeNavbar from "../../components/KnowledgeNavbar/KnowledgeNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { Link, useParams } from "react-router-dom";

const MentorProfile = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mentor, setMentor] = useState(null);
  const ratings = [];
  const { email } = useParams();

  const rating = (n) => {
    for (let i = 0; i < 5; i++) {
      ratings.push(i);
    }
  };

  useEffect(() => {
    async function fetchMentor() {
      const usersRef = collection(db, "Users");
      const q = query(
        usersRef,
        where("userType", "==", "Mentor"),
        where("email", "==", email)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => {
        setMentor(() => {
          return { ...doc.data() };
        });
      });
    }

    fetchMentor();
  }, [email]);

  console.log(mentor);
  console.log(typeof parseInt(mentor?.totalRating));
  rating(5);
  console.log(ratings);

  return (
    <div style={{ backgroundColor: "#f6f6f6" }}>
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
          </div>
        </div>
        <div className={styles.profile_container}>
          <div className={styles.mentor_intro}>
            <img src={mentor?.image} alt="" />
            <div className={styles.about_mentor}>
              <h1 className={styles.h1_tag}>{mentor?.name}</h1>
              <p>{mentor?.domain}</p>
              <div className={styles.mentor_details}>
                <div className={styles.detail}>
                  <h5>Industry</h5>
                  <p>{mentor?.industry}</p>
                </div>
                <div className={styles.detail}>
                  <h5>Appointment</h5>
                  <p>{mentor ? mentor?.plans[0] : "NA"}/Hr</p>
                </div>
                <div className={styles.detail}>
                  <h5>Rating</h5>
                  <p>
                    {/* {rating(mentor)} */}
                    {/* <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" /> */}
                    {ratings.map((item, index) => {
                      return (
                        <img
                          key={index + Math.random()}
                          src="/images/star.png"
                          alt=""
                        />
                      );
                    })}{" "}
                    {mentor?.totalRating}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.mentor_bio}>
            <h1 className={styles.h1_tag}>{mentor?.about}</h1>
            {/* <h1 className={styles.h1_tag}>
              “I like being aware of new things around me ”
            </h1>
            <p>
              I am a marketing research , with <span>7+ years</span> of
              experience., I am an <span>IIM Bangalore</span> graduate and have
              worked with
              <span> Fintech for 5 years</span>.
            </p>
            <br />
            <p>
              <span>Market Research Mentor</span> is the terminal where all
              industrial, commercial and profitmaking venture will get the best
              research reports of the market in all sectors like
              <span> automotive, electronics, pharmaceutical</span> and
              <span> healthcare, food</span> and <span>beverages</span> etc.
            </p> */}
          </div>

          <div className={styles.areaofExpertise}>
            <h1 className={styles.h1_tag}>Area Of Expertise</h1>
            <div className={styles.mentor_expertise}>
              <div className={styles.expertise}>
                <img src="/images/expertise1.svg" alt="" />
                <p>Market Research</p>
              </div>
              <div className={styles.expertise}>
                <img src="/images/expertise2.svg" alt="" />
                <p>Operation</p>
              </div>
              <div className={styles.expertise}>
                <img src="/images/expertise3.svg" alt="" />
                <p>Branding</p>
              </div>
              <div className={styles.expertise}>
                <img src="/images/expertise4.svg" alt="" />
                <p>Finance and Accounting</p>
              </div>
            </div>
          </div>

          <div className={styles.mentor_contact}>
            <button>
              <Link to={`/schedule/${mentor?.email}`} className={styles.link}>
                Schedule
              </Link>
            </button>
            <p>Contact</p>
            <div className={styles.contact_option}>
              <img src="/images/phone-logo.svg" alt="" />
              <img src="/images/gmail-logo.svg" alt="" />
              <img src="/images/instagram-logo.svg" alt="" />
              <img src="/images/twitter3d.png" alt="" />
              <img src="/images/linkedIn3d.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mentor_subscribe}>
        <img src="/images/Ellipse 468.svg" alt="" />
        <h1>Subscibe to {mentor?.name}</h1>
        <p>
          Subscribe for free to receive notification anout upcoming events,
          access live stream, recording and much more!
        </p>
        <div className={styles.subscribe}>
          <input type="email" name="" id="" placeholder="Enter your e-mail" />
          <button>Subscribe for free</button>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
