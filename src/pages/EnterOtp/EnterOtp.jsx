import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import { create, selectNewUser } from "../../features/newUserSlice";
import { login } from "../../features/userSlice";
import { auth, db } from "../../firebase";
import styles from "./EnterOtp.module.css";
import emailjs from "@emailjs/browser";

function EnterOtp() {
  const dispatch = useDispatch();

  const [enteredOtp, setEnteredotp] = useState("");
  const [firstDigit, setFirstDigit] = useState("");
  const [secondDigit, setSecondDigit] = useState("");
  const [thirdDigit, setThirdDigit] = useState("");
  const [fourthDigit, setFourthDigit] = useState("");
  const [fifthDigit, setFifthDigit] = useState("");
  const [sixthDigit, setSixthDigit] = useState("");
  const newUser = useSelector(selectNewUser);

  useEffect(() => {
    const enteredDigits =
      firstDigit +
      secondDigit +
      thirdDigit +
      fourthDigit +
      fifthDigit +
      sixthDigit;
    setEnteredotp(enteredDigits);
  }, [
    firstDigit,
    secondDigit,
    thirdDigit,
    fourthDigit,
    fifthDigit,
    sixthDigit,
  ]);

  const checkOtp = (e) => {
    e.preventDefault();

    console.log(enteredOtp);

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
        .then(() => {
          var templateParams = {
            subject: "Welcome to Reverr!",
            name: newUser.name,
            email: newUser.email,
            message: "You have successfully created your account at Reverr!",
          };

          emailjs
            .send(
              "service_lfmmz8k",
              "template_6lqwjap",
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
            );
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

  const resendOtp = () => {
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

    var templateParams = {
      from_name: "Reverr",
      to_name: newUser.name,
      to_email: newUser.email,
      otp,
    };
// dispatch(create({...prevState, otp}))
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
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.otp}>
      <div className={styles.getStarted}>
        <h1>
          Get Started with <span>REVERR</span>
        </h1>
      </div>
      <div className={styles.para}>
        <p>
          We have provided you an OTP email address; please enter the OTP
          received to proceed and become a member of Reverr.
        </p>
      </div>
      <form className={styles.otpForm} onSubmit={checkOtp}>
        <div className={styles.otpInputs}>
          <input
            maxLength={1}
            type="text"
            value={firstDigit}
            onChange={(e) => setFirstDigit(e.target.value)}
          />
          <input
            maxLength={1}
            type="text"
            value={secondDigit}
            onChange={(e) => setSecondDigit(e.target.value)}
          />
          <input
            maxLength={1}
            type="text"
            value={thirdDigit}
            onChange={(e) => setThirdDigit(e.target.value)}
          />
          <input
            maxLength={1}
            type="text"
            value={fourthDigit}
            onChange={(e) => setFourthDigit(e.target.value)}
          />
          <input
            maxLength={1}
            type="text"
            value={fifthDigit}
            onChange={(e) => setFifthDigit(e.target.value)}
          />
          <input
            maxLength={1}
            type="text"
            value={sixthDigit}
            onChange={(e) => setSixthDigit(e.target.value)}
          />
        </div>
        <button onClick={resendOtp} className={styles.resend}>
          RESEND
        </button>
        <Button type="submit">Move Ahead</Button>
      </form>
    </div>
  );
}

export default EnterOtp;
