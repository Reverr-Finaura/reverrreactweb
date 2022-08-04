import React from "react";
import styles from "./RoundButton.module.css";

function RoundButton(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${props.className} ${styles.button}`}
    >
      {props.children}
    </button>
  );
}

export default RoundButton;
