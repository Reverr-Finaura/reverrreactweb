import { MenuIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  phnSidebarVisible,
  selectPhnSidebar,
} from "../../features/phnSidebarSlice";
import styles from "./KnowledgeNavbar.module.css";

function KnowledgeNavbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  const [phnOptionsVisible, setPhnOptionsVisible] = useState(false);
  const dispatch = useDispatch();
  return (
    <navbar className={styles.navbar}>
      <MenuIcon
        onClick={() => dispatch(phnSidebarVisible())}
        className={styles.menuIcon}
      />
      <div
        className={styles.logo}
        onClick={() => setPhnOptionsVisible(!phnOptionsVisible)}
      >
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
      <div
        style={{
          display: phnOptionsVisible && width <= 600 ? "flex" : "none",
        }}
        className={`${styles.phnOptions} animate__animated animate__fadeIn`}
      >
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
  );
}

export default KnowledgeNavbar;
