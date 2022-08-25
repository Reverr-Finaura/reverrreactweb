import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { selectNewUser } from "./features/newUserSlice";
import { login, logout, selectUser } from "./features/userSlice";
import Card from "./pages/AfterSignUp/Cards/Card";
import Auth from "./pages/Auth/Auth";
import EnterOtp from "./pages/EnterOtp/EnterOtp";
import ForgotPassword from "./pages/Forgotpassword/ForgotPassword";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PasswordReset from "./pages/PasswordRecover/PasswordReset";
import Experience from "./pages/AfterSignUp/Experience/Experience";
import Industry from "./pages/AfterSignUp/Industry/Industry";
import Onboarding from "./pages/AfterSignUp/Onboarding/Onboarding";
import Education from "./pages/AfterSignUp/Education/Education";
import Gender from "./pages/AfterSignUp/Gender/Gender";
import Review from "./pages/AfterSignUp/Review page/Review";
import Confirmation from "./pages/AfterSignUp/Confirmation/Confirmation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Verification from "./pages/AfterSignUp/Verification/Verification";
import { Toaster } from "react-hot-toast";
import Knowledge from "./pages/Knowledge/Knowledge";
import BetaTesting from "./pages/AfterKnowledge/BetaTesting/BetaTesting";
import IdeaValidation from "./pages/AfterKnowledge/Idea Validation & EP/IdeaValidation";
import BusinessPlanning from "./pages/AfterKnowledge/BusinessPlanning/BusinessPlanning";
import Newsletter from "./pages/AfterKnowledge/Newsletter/Newsletter";
import BuildAudience from "./pages/AfterKnowledge/BuildAudience/BuildAudience";
import BusinessModal from "./pages/AfterKnowledge/BusinessModal/BusinessModal";
import CompetitorAnalysis from "./pages/AfterKnowledge/CompetitorAnalysis/CompetitorAnalysis";
import Slides from "./components/slides/Slides";
import BetaSlide1 from "./pages/AfterKnowledge/BetaTesting/BetaTestingSlides/BetaSlide1";

function App() {
  const user = useSelector(selectUser);
  const newUser = useSelector(selectNewUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            email: auth.currentUser.email,
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <>
      {/* <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        {!user ? (
          <>
            <Route path="/signup" element={<Auth />} />
            <Route path="/login" element={<Login />} />
          </>
        ) : null}
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        {newUser ? (
          <Route path="enterotp" element={<EnterOtp />}></Route>
        ) : null}
        {newUser ? (
          <>
            <Route path="/startup-list" element={<Card />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/gender" element={<Gender />} />
            <Route path="/startup-confirm" element={<Confirmation />} />
            <Route path="/startup-onboarding" element={<Onboarding />} />
            <Route path="/startup-review" element={<Review />} />{" "}
          </>
        ) : null}
        <Route path="/startup-verification" element={<Verification />} />
        <Route path="/knowledge" element={<Knowledge />}></Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes> */}
      {/* <BetaTesting /> */}
      {/* <IdeaValidation /> */}
      {/* <BusinessPlanning /> */}
      {/* <Newsletter /> */}
      {/* <BuildAudience /> */}
      {/* <BusinessModal /> */}
      {/* <CompetitorAnalysis /> */}
      <BetaSlide1 />
    </>
  );
}

export default App;
