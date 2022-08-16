import React from "react";
import styles from "./Knowledge.module.css";

function Knowledge() {
  return (
    <div>
      <navbar className={styles.navbar}>
        <div className={styles.logo}>
          <img src="./images/Reverr Black 1.png" alt="" />
          <p>REVERR</p>
        </div>
        <div className={styles.options}>
          <div>
            <img src="./images/bell.png" alt="" />
          </div>
          <div>
            <img src="./images/ant-design_question-circle-filled.png" alt="" />
          </div>
          <div>
            <img src="./images/uim_calender.png" alt="" />
          </div>
          <div>
            <img src="./images/ant-design_message-twotone.png" alt="" />
          </div>
          <div>
            <img src="./images/Group.png" alt="" />
          </div>
        </div>
      </navbar>
    </div>
  );
}

export default Knowledge;
