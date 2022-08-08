import React from "react";
import styles from "../Cards/card.module.css";

const array = [
  {
    heading: "Fintech",
    paragraph: "I am a paragraph , Click me to change the paragraph",
  },
  {
    heading: "Sales",
    paragraph: "I am a paragraph , Click me to change the paragraph",
  },
  {
    heading: "Legal",
    paragraph: "I am a paragraph , Click me to change the paragraph",
  },
  {
    heading: "Fund Raising",
    paragraph: "I am a paragraph , Click me to change the paragraph",
  },
  {
    heading: "Product Development",
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

const Role = () => {
  return (
    <div className={styles.industry__container}>
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
        <button className={styles.btn1}>Next</button>
        <button className={styles.btn2}>Skip</button>
      </div>
    </div>
  );
};

export default Role;
