import { XIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  phnSidebarInvisible,
  selectPhnSidebar,
} from "../../features/phnSidebarSlice";
import styles from "./PhnSidebar.module.css";

function Sidebar() {
  const phnSidebar = useSelector(selectPhnSidebar);
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <div
      style={{
        display: phnSidebar && width <= 600 ? "flex" : "none",
      }}
      className={`${styles.phnSidebar} animate__animated 
        animate__slideInLeft animate__faster`}
    >
      <div
        onClick={() => {
          dispatch(phnSidebarInvisible());
        }}
        className={styles.phnSidebarOption}
      >
        <XIcon className={styles.xicon} />
      </div>
      <div className={styles.phnSidebarOption}>
        <img src="./images/dashboard.png" alt="" />
        <p>Dashboard</p>
      </div>
      <div className={styles.phnSidebarOption}>
        <img src="./images/presentation.png" alt="" />
        <p>Tools</p>
      </div>
      <div className={styles.phnSidebarOption}>
        <img src="./images/brain.png" alt="" />
        <p>Knowledge</p>
      </div>
      <div className={styles.phnSidebarOption}>
        <img src="./images/wallet.png" alt="" />
        <p>Funding</p>
      </div>
      <div className={styles.phnSidebarOption}>
        <img src="./images/video.png" alt="" />
        <p>Patch</p>
      </div>
      <div className={styles.phnSidebarOption}>
        <img src="./images/bookopen.png" alt="" />
        <p>Get Mentored</p>
      </div>
      <div className={styles.phnSidebarOption}>
        <img src="./images/handshake.png" alt="" />
        <p>Community</p>
      </div>
      <div className={styles.phnSidebarOption}>
        <img src="./images/crown.png" alt="" />
        <p>Upgrade</p>
      </div>
    </div>
  );
}

export default Sidebar;
