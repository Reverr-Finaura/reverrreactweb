import { sendPasswordResetEmail } from "firebase/auth";
import styles from "./Forgotpassword.module.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { auth } from "../../firebase";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("pls check your email");
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <section className={styles.auth}>
      <div className={styles.password_reset}>
        <p>We'll mail you password reset link.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            id=""
            placeholder="Email"
          />
          <p>
            <Link to="/login">Back to Login</Link>
          </p>
          <Button type="submit">Send Mail</Button>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;