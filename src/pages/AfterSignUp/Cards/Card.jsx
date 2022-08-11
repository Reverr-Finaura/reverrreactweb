import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import { modify } from "../../../features/newUserSlice";
import Footer from "../../Footer/Footer";
import styles from "./card.module.css";

const array = [
  {
    heading: "Mentorship",
    paragraph: "I am a paragraph , Click me to change the paragraph",
  },
  {
    heading: "Ideas",
    paragraph: "I am a paragraph , Click me to change the paragraph",
  },
  {
    heading: "Networking",
    paragraph: "I am a paragraph , Click me to change the paragraph",
  },
  {
    heading: "Accounting",
    paragraph: "I am a paragraph , Click me to change the paragraph",
  },
  {
    heading: "Funding",
    paragraph: "I am a paragraph , Click me to change the paragraph",
  },
  {
    heading: "Research",
    paragraph: "I am a paragraph , Click me to change the paragraph",
  },
  {
    heading: "Marketing",
    paragraph: "I am a paragraph , Click me to change the paragraph",
  },
  {
    heading: "Financing",
    paragraph: "I am a paragraph , Click me to change the paragraph",
  },
];

const Card = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [lookingFor, setLookingFor] = useState([]);
  const handleNext = () => {
    dispatch(modify({ lookingFor }));
    navigate("/industry");
  };
  const handleSkip = () => {
    dispatch(modify({ lookingFor: [] }));
    navigate("/industry");
  };
  return (
    <>
      <Header theme="black" />
      <div className={styles.list__container}>
        <h1 className={styles.big__heading}>What are you looking for?</h1>
        <div className={styles.cards__flex}>
          {array.map(({ heading, paragraph }, index) => (
            <div key={index} className={styles.card__container}>
              <div className={styles.card__image_container}>
                <img
                  src="/images/hero2.png"
                  alt=""
                  className={styles.card__image}
                />
              </div>
              <div className={styles.card__heading}>{heading}</div>
              <div className={styles.card__para}>{paragraph}</div>
              {!lookingFor.find((x) => x === heading) ? (
                <button
                  onClick={() => {
                    setLookingFor((prevState) => [...prevState, heading]);
                    console.log(lookingFor);
                  }}
                  className={styles.card__btn}
                >
                  Select
                </button>
              ) : (
                <button
                  onClick={() => {
                    setLookingFor(
                      lookingFor.filter((item) => item !== heading)
                    );
                    console.log(lookingFor);
                  }}
                  className={styles.card__btn}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
        <div className={styles.btns}>
          <button
            disabled={lookingFor.length > 0 ? false : true}
            onClick={handleNext}
            className={styles.btn1}
            style={{ opacity: lookingFor.length > 0 ? "1" : "0.5" }}
          >
            Next
          </button>
          <button onClick={handleSkip} className={styles.btn2}>
            Skip
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Card;
