import React, { useState } from "react";
import styles from "./Auth.module.css";
import { auth, db } from "../../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

function Auth() {
  const [userType, setUserType] = useState("founder");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
            userType: userType,
          })
        );
      })
      .then(() => {
        const docRef = addDoc(collection(db, "Users"), {
          email: auth.currentUser.email,
          uid: auth.currentUser.uid,
          displayName: auth.currentUser.displayName,
          userType,
        });
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const signUpEmail = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          dispatch(
            login({
              firstName,
              lastName,
              email,
              password,
              userType,
            })
          );
        })
        .then(() => {
          const docRef = addDoc(collection(db, "Users"), {
            name: firstName + " " + lastName,
            email: auth.currentUser.email,
            uid: auth.currentUser.uid,
            userType,
          });
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    } else {
      alert("passwords do not match");
    }
  };

  return (
    <section className={styles.auth}>
      <div className={styles.signup}>
        <div>
          <Button onClick={() => setUserType("founder")}>
            Join as a Founder
          </Button>
          <Button onClick={() => setUserType("mentor")}>
            Join as a Mentor
          </Button>
        </div>
        <div>
          <h1>Get started as a {userType} with REVERR</h1>
        </div>
        <Button onClick={signInWithGoogle}>Sign up with Google</Button>
        <div>
          <p>Or Sign Up with your E-mail</p>
        </div>
        <form onSubmit={signUpEmail}>
          <div className={styles.name}>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              placeholder="Last Name"
            />
          </div>
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
          <div>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}

export default Auth;
