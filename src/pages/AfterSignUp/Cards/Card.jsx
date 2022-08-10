import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
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
  return (
    <>
      <Header />
      <div className={styles.list__container}>
        <h1 className={styles.big__heading}>What are you looking for?</h1>
        <div className={styles.cards__flex}>
          {array.map(({ heading, paragraph }) => (
            <div className={styles.card__container}>
              <div className={styles.card__image_container}>
                <img
                  src="/images/hero2.png"
                  alt=""
                  className={styles.card__image}
                />
              </div>
              <div className={styles.card__heading}>{heading}</div>
              <div className={styles.card__para}>{paragraph}</div>
              <button className={styles.card__btn}>Select</button>
            </div>
          ))}
        </div>
        <div className={styles.btns}>
          <Link to="/industry">
            <button className={styles.btn1}>Next</button>
          </Link>
          <button className={styles.btn2}>Skip</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Card;
