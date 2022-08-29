import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const [isHoveringSidebar, setIsHoveringSidebar] = useState(false);
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
        padding: isHoveringSidebar ? "1rem 10rem 1rem 1rem" : "1rem",
      }}
      className={styles.sidebar}
      onMouseOver={() => setIsHoveringSidebar(true)}
      onMouseOut={() => setIsHoveringSidebar(false)}
    >
      <div className={styles.sidebarOption}>
        <img src="./images/dashboard.png" alt="" />
        <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
          Dashboard
        </p>
      </div>
      <div className={styles.sidebarOption}>
        <img src="./images/presentation.png" alt="" />
        <p style={{ display: isHoveringSidebar ? "block" : "none" }}>Tools</p>
      </div>
      <div className={styles.sidebarOption}>
        <img src="./images/brain.png" alt="" />
        <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
          Knowledge
        </p>
      </div>
      <div className={styles.sidebarOption}>
        <img src="./images/wallet.png" alt="" />
        <p style={{ display: isHoveringSidebar ? "block" : "none" }}>Funding</p>
      </div>
      <div className={styles.sidebarOption}>
        <img src="./images/video.png" alt="" />
        <p style={{ display: isHoveringSidebar ? "block" : "none" }}>Patch</p>
      </div>
      <div className={styles.sidebarOption}>
        <img src="./images/bookopen.png" alt="" />
        <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
          Get Mentored
        </p>
      </div>
      <div className={styles.sidebarOption}>
        <img src="./images/handshake.png" alt="" />
        <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
          Community
        </p>
      </div>
      <div className={styles.sidebarOption}>
        <img src="./images/crown.png" alt="" />
        <p style={{ display: isHoveringSidebar ? "block" : "none" }}>Upgrade</p>
      </div>
    </div>
  );
}

export default Sidebar;
