import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectNewUser } from "../../features/newUserSlice";
import { logout, selectUser } from "../../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-hot-toast";

import styles from "./header.module.css";

const Header = ({ theme }) => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const newUser = useSelector(selectNewUser);
  const dispatch = useDispatch();
  const [extendNavbar, setExtendNavbar] = useState(false);

  const handleClick = () => {
    setExtendNavbar(!extendNavbar);
  };

  return (
    <section className={styles.headerContainer}>
      <button className={styles.logo} onClick={handleClick}>
        <img
          src={
            theme === "black"
              ? "/images/Reverr Black 1.svg"
              : "/images/reaver-logo.svg"
          }
          alt=""
        />
        <img src={"/images/reaver-text.svg"} alt="" />
      </button>

      <div
        className={styles.buttonRow}
        style={{
          display:
            window.innerWidth < 769 ? (extendNavbar ? "flex" : "none") : "flex",
        }}
      >
        <button className={styles.navButton} style={{ color: theme }}>
          Investors
        </button>
        <button className={styles.navButton} style={{ color: theme }}>
          Founders
        </button>
        <button className={styles.navButton} style={{ color: theme }}>
          Members
        </button>
        <button className={styles.navButton} style={{ color: theme }}>
          About Us
        </button>
        <button className={styles.navButton} style={{ color: theme }}>
          Contact Us
        </button>
        {!user && (
          <button
            onClick={() => navigate("/signup")}
            className={styles.authButton}
          >
            <svg
              width="163"
              height="47"
              viewBox="0 0 163 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.948542 46.0036L32.2629 0.5H162.046L130.239 46.499L0.948542 46.0036Z"
                fill="url(#paint0_linear_4010_18318)"
                stroke="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4010_18318"
                  x1="159.559"
                  y1="0.915589"
                  x2="117.204"
                  y2="98.0869"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.231523" stopColor="#012437" />
                  <stop offset="1" stopColor="#8C96FD" stopOpacity="0.42" />
                </linearGradient>
              </defs>
            </svg>
            <div className={styles.authButtonTextContainer}>
              <span className={styles.authButtonText}>Sign Up</span>
            </div>
          </button>
        )}

        <button
          onClick={
            user
              ? () =>
                  signOut(auth)
                    .then(() => {
                      dispatch(logout());
                    })
                    .then(() => {
                      toast.success("sucessfully logged out");
                    })
              : () => navigate("/login")
          }
          className={styles.authButton}
        >
          <svg
            width="163"
            height="47"
            viewBox="0 0 163 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.948542 46.0036L32.2629 0.5H162.046L130.239 46.499L0.948542 46.0036Z"
              fill="url(#paint0_linear_4010_18318)"
              stroke="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4010_18318"
                x1="159.559"
                y1="0.915589"
                x2="117.204"
                y2="98.0869"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.231523" stopColor="#012437" />
                <stop offset="1" stopColor="#8C96FD" stopOpacity="0.42" />
              </linearGradient>
            </defs>
          </svg>
          <div
            className={styles.authButtonTextContainer}
            style={{ cursor: "pointer" }}
          >
            <span className={styles.authButtonText}>
              {user ? "Sign Out" : "Login"}
            </span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Header;
