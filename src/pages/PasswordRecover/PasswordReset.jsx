import { confirmPasswordReset } from "firebase/auth";
import React, {useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { auth } from "../../firebase";
import styles from "./Passwordreset.module.css";

const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const handlePasswordChange = (e) => {
    e.preventDefault();
    const oobCode = searchParams.get("oobCode");

    confirmPasswordReset(auth, oobCode, newPassword)
      .then(() => {
        alert("Password changed successfully");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={styles.auth}>
      <div className={styles.password_reset}>
        <form onSubmit={handlePasswordChange}>
          <input
            type="password"
            id=""
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            placeholder="Enter your new password"
          />
          <p>
            <Link to="/login">Back to Login</Link>
          </p>
          <button type="submit">Save New Password</button>
        </form>
      </div>
    </section>
  );
};

export default PasswordReset;
