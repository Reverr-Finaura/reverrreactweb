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
            email,
          })
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <section className={styles.auth}>
      <div className={styles.signup}>
        <Button onClick={signInWithGoogle}>Login with Google</Button>
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
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <p>
          Forgot Password? <Link to="passwordrecovery">Click Here</Link>
        </p>
      </div>
    </section>
  );
}

export default Auth;
