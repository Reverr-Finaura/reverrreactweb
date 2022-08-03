import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import { remove } from "../../features/newUserSlice";
import { logout } from "../../features/userSlice";
import { auth } from "../../firebase";
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
    <div className={styles.welcome}>
      Welcome to Reverr
      <Button onClick={logOut}>logout</Button>
    </div>
  );
}

export default Community;
