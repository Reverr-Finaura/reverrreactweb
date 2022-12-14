import React, { useEffect, useState } from "react";
import styles from "./MentorProfile.module.css";
import PhnSidebar from "../../components/PhnSidebar/PhnSidebar";
import KnowledgeNavbar from "../../components/KnowledgeNavbar/KnowledgeNavbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPlans } from "../../features/plansSlice";
import ExpertiseItem from "../../components/ExpertiseItem/ExpertiseItem";
import { setScheduleMentor } from "../../features/scheduleSlice";
import Footer from "../Footer/Footer";

const MentorProfile = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mentor, setMentor] = useState(null);
  const ratings = [];
  const dispatch = useDispatch();
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

  dispatch(setPlans(mentor?.plans));

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
            <img className={styles.mentorImg} src={mentor?.image} alt="" />
            <div className={styles.about_mentor}>
              <h1 className={styles.h1_tag}>{mentor?.name}</h1>
              <p>{mentor?.domain[0]}</p>
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
            <p className={styles.about}>{mentor?.about}</p>
            {/* <h1 className={styles.h1_tag}>
              ???I like being aware of new things around me ???
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
              {mentor?.domain?.map((item, index) => (
                <ExpertiseItem
                  img={index + 1}
                  key={index + Math.random()}
                  expertise={item}
                />
              ))}
            </div>
          </div>

          <div className={styles.mentor_contact}>
            <button style={{ marginLeft: "2rem" }}>
              <Link
                onClick={() => {
                  dispatch(setScheduleMentor(mentor));
                }}
                to={`/payment/${mentor?.email}`}
                className={styles.link}
              >
                Schedule
              </Link>
            </button>
            <p>Contact</p>
            <div className={styles.contact_option}>
              <a href={`tel:${mentor?.mobile}`}>
                <img src="/images/phone-logo.svg" alt="" />
              </a>
              <a href={`mailto:${mentor?.email}`}>
                <img src="/images/gmail-logo.svg" alt="" />
              </a>
              <a href={mentor?.linkedin}>
                <img src="/images/linkedIn3d.png" alt="" />
              </a>
              {/* <img src="/images/instagram-logo.svg" alt="" />
              <img src="/images/twitter3d.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mentor_subscribe}>
        <img src={mentor?.image} alt="" />
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
      <Footer />
    </div>
  );
};

export default MentorProfile;
