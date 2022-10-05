import React from "react";
import { Link } from "react-router-dom";
import styles from "./MentorComponent.module.css";

function MentorComponent(props) {
  const filledStarArray = [];
  const unFilledStarArray = [];
  const filledStarArrayUpdate = (n) => {
    for (var i = 0; i < parseInt(n); i++) {
      filledStarArray.push(i);
    }
  };

  const unFilledStarArrayUpdate = (n) => {
    for (var i = 0; i < parseInt(5 - n); i++) {
      unFilledStarArray.push(i);
    }
  };

  filledStarArrayUpdate(props.rating);
  unFilledStarArrayUpdate(props.rating);

  return (
    <Link className={styles.link} to={`/mentor-profile/${props.to}`}>
      <div className={styles.mentor}>
        <img src={props.img} alt={props.name} />
        <p className={styles.name}>
          <b>{props.name}</b>
        </p>
        <p className={styles.type}>{props.type}</p>
        <div className={styles.rating}>
          {filledStarArray.map((item, index) => {
            return (
              <img
                key={index + Math.random()}
                src="/images/filledstar.svg"
                alt={item}
              />
            );
          })}
          {unFilledStarArray.map((item, index) => {
            return (
              <img
                key={index + Math.random()}
                src="/images/unfilledstar.svg"
                alt={item}
              />
            );
          })}
        </div>
      </div>
    </Link>
  );
}

export default MentorComponent;
