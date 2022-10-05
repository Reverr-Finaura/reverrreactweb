import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { motion } from "framer-motion";

function Sidebar() {
  const [isHoveringSidebar, setIsHoveringSidebar] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // new:
  const [visible, setVisible] = useState(true);

  const location = useLocation();
  const pathname = location.pathname;

  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos < window.innerHeight) ||
        currentScrollPos < window.innerHeight
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // window.addEventListener("resize", updateWidth);
    // return () => window.removeEventListener("resize", updateWidth);
    console.log(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        padding: isHoveringSidebar ? "1rem 10rem 1rem 1rem" : "1rem",
        left: visible ? "auto" : "-100px",
      }}
      className={styles.sidebar}
      onMouseOver={() => setIsHoveringSidebar(true)}
      onMouseOut={() => setIsHoveringSidebar(false)}
    >
      <NavLink className={styles.navlink} to="/dashboard">
        <div className={styles.sidebarOption}>
          <img
            src={
              pathname === "/dashboard"
                ? "/images/dashboard-selected.svg"
                : "/images/dashboard.svg"
            }
            alt=""
          />
          <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
            Dashboard
          </p>
        </div>
      </NavLink>
      <NavLink className={styles.navlink} to="/tools">
        <div className={styles.sidebarOption}>
          <img
            src={
              pathname === "/tools"
                ? "/images/presentation-selected.svg"
                : "/images/presentation.svg"
            }
            alt=""
          />
          <p style={{ display: isHoveringSidebar ? "block" : "none" }}>Tools</p>
        </div>
      </NavLink>
      <NavLink className={styles.navlink} to="/knowledge">
        <div className={styles.sidebarOption}>
          <img
            src={
              pathname === "/knowledge"
                ? "/images/knowledge-selected.svg"
                : "/images/brain.svg"
            }
            alt=""
          />
          <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
            Knowledge
          </p>
        </div>
      </NavLink>
      <NavLink className={styles.navlink} to="/funding">
        <div className={styles.sidebarOption}>
          <img
            src={
              pathname === "/funding"
                ? "/images/funding-selected.svg"
                : "/images/wallet.svg"
            }
            alt=""
          />
          <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
            Funding
          </p>
        </div>
      </NavLink>
      <NavLink className={styles.navlink} to="/patch">
        <div className={styles.sidebarOption}>
          <img
            src={
              pathname === "/patch"
                ? "/images/patch-selected.svg"
                : "/images/videos.svg"
            }
            alt=""
          />
          <p style={{ display: isHoveringSidebar ? "block" : "none" }}>Patch</p>
        </div>
      </NavLink>
      <NavLink className={styles.navlink} to="/mentors">
        <div className={styles.sidebarOption}>
          <img
            src={
              pathname === "/mentors" ||
              pathname === "/mentor" ||
              pathname === "/payment" ||
              pathname === "/schedule"
                ? "/images/book-selected.svg"
                : "/images/bookopen.svg"
            }
            alt=""
          />
          <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
            Get Mentored
          </p>
        </div>
      </NavLink>
      <NavLink className={styles.navlink} to="/community">
        <div className={styles.sidebarOption}>
          <img
            src={
              pathname === "/community"
                ? "/images/community-selected.svg"
                : "/images/handshake.svg"
            }
            alt=""
          />
          <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
            Community
          </p>
        </div>
      </NavLink>
      <NavLink className={styles.navlink} to="/myprofile">
        <div className={styles.sidebarOption}>
          <img
            src={
              pathname === "/myprofile"
                ? "/images/myprofile-selected.svg"
                : "/images/myprofile.svg"
            }
            alt=""
          />
          <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
            My Profile
          </p>
        </div>
      </NavLink>
      <NavLink className={styles.navlink} to="/upgrade">
        <div className={styles.sidebarOption}>
          <img
            src={
              pathname === "/upgrade"
                ? "/images/knowledge-selected.svg"
                : "/images/crown.svg"
            }
            alt=""
          />
          <p style={{ display: isHoveringSidebar ? "block" : "none" }}>
            Upgrade
          </p>
        </div>
      </NavLink>
    </motion.div>
  );
}

export default Sidebar;
