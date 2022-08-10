import { confirmPasswordReset } from "firebase/auth";
import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { auth } from "../../firebase";
import styles from "./Passwordreset.module.css";

const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const handlePasswordChange = (e) => {
    e.preventDefault();
    const oobCode = searchParams.get("oobCode");

    if (newPassword === newConfirmPassword) {
      confirmPasswordReset(auth, oobCode, newPassword)
        .then(() => {
          alert("Password changed successfully");
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <>
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
            <input
              type="password"
              id=""
              onChange={(e) => {
                setNewConfirmPassword(e.target.value);
              }}
              placeholder="Enter your new confirm password"
            />
            <p>
              <Link to="/login" className={styles.link}>
                Back to Login
              </Link>
            </p>
            <Button type="submit">Save New Password</Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default PasswordReset;
