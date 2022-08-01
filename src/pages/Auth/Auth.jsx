import React, { useState } from "react";
import styles from "./Auth.module.css";
import { auth } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

function Auth() {
  const [userType, setUserType] = useState("founder");
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
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <section className={styles.auth}>
      <div className={styles.signup}>
        <div>
          <button onClick={() => setUserType("founder")}>
            Join as a Founder
          </button>
          <button onClick={() => setUserType("mentor")}>
            Join as a Mentor
          </button>
        </div>
        <div>
          <h1>Get started as a {userType}</h1>
        </div>
        <button onClick={signInWithGoogle}>Sign up with Google</button>
        <div>
          <p>Or Sign Up with your E-mail</p>
        </div>
        <form>
          <div className={styles.name}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div>
            <input type="email" placeholder="Your E-Mail" />
          </div>
          <div>
            <input type="password" placeholder="Enter a password" />
          </div>
          <div>
            <input type="password" placeholder="Confirm Password" />
          </div>
          <button>Sign Up</button>
        </form>
        <p>
          Already have an account? <button>Login</button>
        </p>
        <p>
          Forgot Password? <button>Click Here</button>
        </p>
      </div>
    </section>
  );
}

export default Auth;
