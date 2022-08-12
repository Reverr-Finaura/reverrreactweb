import React, { useState } from "react";
import styles from "./Login.module.css";
import { auth } from "../../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../Footer/Footer";
import { toast } from "react-hot-toast";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        dispatch(
          login({
            email: auth.currentUser.email,
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            profilePic: auth.currentUser.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };

  const loginEmail = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          login({
            email: auth.currentUser.email,
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            profilePic: auth.currentUser.photoURL,
          })
        );
      })
      .then(() => {
        toast.success("Sucessfully logged in");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <>
      <Header theme={"black"} />
      <section className={styles.auth}>
        <div className={styles.signup}>
          <div className={styles.google_signup}>
            <Button className={styles.googleLoginBtn} onClick={signInWithGoogle}>
              <img src="/images/image 134.svg" alt="" />
              Login with Google
            </Button>
          </div>
          <div>
            <p>Or Login with your E-mail</p>
          </div>
          <form onSubmit={loginEmail}>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Your E-Mail"
              />
            </div>
            <div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter a password"
              />
            </div>
            <Button type="submit">Login</Button>
          </form>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className={styles.link}>
              Sign Up
            </Link>
          </p>
          <p>
            Forgot Password?{" "}
            <Link to="/forgotpassword" className={styles.link}>
              Click Here
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Auth;
