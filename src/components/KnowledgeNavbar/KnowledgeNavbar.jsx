import { MenuIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  phnSidebarVisible,
  selectPhnSidebar,
} from "../../features/phnSidebarSlice";
import { selectChat, showChat } from "../../features/chatSlice";
import ChatComponent from "../chat/ChatComponent";
import styles from "./KnowledgeNavbar.module.css";

function KnowledgeNavbar() {
  const dispatch = useDispatch();
  const chat = useSelector(selectChat);
  const [phnOptionsVisible, setPhnOptionsVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <>
      <navbar className={styles.navbar}>
        <MenuIcon
          onClick={() => dispatch(phnSidebarVisible())}
          className={styles.menuIcon}
        />
        <Link to="/" className={styles.Homelink}>
          <div
            className={styles.logo}
            onClick={() => setPhnOptionsVisible(!phnOptionsVisible)}
          >
            <img src="/images/Reverr Black 1.png" alt="" />
            <p>REVERR</p>
          </div>
        </Link>
        <div className={styles.options}>
          <Link className={styles.link} to="/notifications">
            <div>
              <img src="/images/bell.svg" alt="" />
            </div>
          </Link>
          {/* <div>
          <img src="/images/question.svg" alt="" />
        </div> */}
          <Link className={styles.link} to="/dashboard/#calendar">
            <div>
              <img src="/images/calender.svg" alt="" />
            </div>
          </Link>
          <Link
            className={styles.link}
            onClick={() => {
              dispatch(showChat());
            }}
          >
            <div>
              <img src="/images/message.svg" alt="" />
            </div>
          </Link>
          <Link className={styles.link} to="/myprofile">
            <div>
              <img src="/images/profile.svg" alt="" />
            </div>
          </Link>
        </div>
        <div
          style={{
            display: phnOptionsVisible && width <= 600 ? "flex" : "none",
          }}
          className={`${styles.phnOptions} animate__animated animate__fadeIn`}
        >
          <div>
            <img src="/images/bell.svg" alt="" />
          </div>
          <div>
            <img src="/images/question.svg" alt="" />
          </div>
          <div>
            <img src="/images/calender.svg" alt="" />
          </div>
          <div>
            <img src="/images/chat.svg" alt="" />
          </div>
          <div>
            <img src="/images/profile.svg" alt="" />
          </div>
        </div>
      </navbar>
      {chat && <ChatComponent />}
    </>
  );
}

export default KnowledgeNavbar;
