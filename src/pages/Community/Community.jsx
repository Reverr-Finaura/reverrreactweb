import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { remove } from "../../features/newUserSlice";
import { logout } from "../../features/userSlice";
import { auth } from "../../firebase";
import Footer from "../Footer/Footer";
import styles from "./Community.module.css";

function Community() {
  const dispatch = useDispatch();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .then(() => {
        dispatch(remove());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Header />
      <div className={styles.welcome}>
        Welcome to Reverr
        <Button onClick={logOut}>logout</Button>
      </div>
      <Footer />
    </>
  );
}

export default Community;
