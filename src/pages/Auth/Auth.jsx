import React, { useState } from "react";
import styles from "./Auth.module.css";
import { auth, db } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { create } from "../../features/newUserSlice";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";

function Auth() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("FOUNDER");
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
      function generate(n) {
        var add = 1,
          max = 12 - add;
        if (n > max) {
          return generate(max) + generate(n - max);
        }
        max = Math.pow(10, n + add);
        var min = max / 10;
        var number = Math.floor(Math.random() * (max - min + 1)) + min;

        return ("" + number).substring(add);
      }
      const otp = generate(6);
      dispatch(
        create({
          name: firstName + " " + lastName,
          email: email,
          userType,
          otp,
          password,
        })
      );
      var templateParams = {
        from_name: "Reverr",
        to_name: firstName + " " + lastName,
        to_email: email,
        otp,
      };

      emailjs
        .send(
          "service_lfmmz8k",
          "template_n3pcht5",
          templateParams,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        )
        .then(() => {
          navigate("/enterotp");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("passwords do not match");
    }
  };

  return (
    <section className={styles.auth}>
      <div className={styles.signup}>
        {/* <div>
          <Button onClick={() => setUserType("founder")}>
            Join as a Founder
          </Button>
          <Button onClick={() => setUserType("mentor")}>
            Join as a Mentor
          </Button>
        </div> */}
        <div>
          <h1>
            Get started as a {userType} with
            <span style={{ color: "#2a72de" }}> REVERR</span>
          </h1>
        </div>
        <div className={styles.google_signup}>
          <Button onClick={signInWithGoogle}>
            <img src="/images/image 134.svg" alt="" />
            Sign up with Google
          </Button>
        </div>
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
          <div className={styles.email_signup}>
            <Button type="submit">Sign Up</Button>
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <Link className={styles.login_link} to="/login">
            Login Here
          </Link>
        </p>
        <p>
          {`Want to join as a ${userType}?`}
          <button className={styles.apply_link}> Apply Here</button>
        </p>
      </div>
    </section>
  );
}

export default Auth;
