import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import { selectNewUser } from "../../features/newUserSlice";
import { login } from "../../features/userSlice";
import { auth, db } from "../../firebase";
import styles from "./EnterOtp.module.css";

function EnterOtp() {
  const dispatch = useDispatch();
  const [enteredOtp, setEnteredotp] = useState("");
  const newUser = useSelector(selectNewUser);
  const checkOtp = (e) => {
    e.preventDefault();
    if (newUser.otp === enteredOtp) {
      createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
        .then((userCredential) => {
          const docRef = addDoc(collection(db, "Users"), {
            newUser,
          });
          console.log("Document written with ID: ", docRef.id);
        })
        .then(() => {
          dispatch(login({ newUser }));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error, errorCode, errorMessage);
        });
    } else {
      console.log("check kar");
    }
  };

  return (
    <div className={styles.otp}>
      <form onSubmit={checkOtp}>
        <p>Enter OTP sent to your e-mail</p>
        <input
          type="text"
          value={enteredOtp}
          onChange={(e) => setEnteredotp(e.target.value)}
          placeholder="Enter OTP"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default EnterOtp;
