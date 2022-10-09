import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const [isHoveringSidebar, setIsHoveringSidebar] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const location = useLocation();
  const pathname = location.pathname;

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    console.log(window.scrollY);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos > 0 ? false : true);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div
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
      {/* <NavLink className={styles.navlink} to="/tools">
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
      </NavLink> */}
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
      {/* <NavLink className={styles.navlink} to="/patch">
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
      </NavLink> */}
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
    </div>
  );
}

export default Sidebar;
