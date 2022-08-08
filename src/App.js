// import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import { selectNewUser } from "./features/newUserSlice";
import { login, logout, selectUser } from "./features/userSlice";
import Card from "./pages/AfterSignUp/Cards/Card";
// import { auth } from "./firebase";
import Auth from "./pages/Auth/Auth";
import Community from "./pages/Community/Community";
import EnterOtp from "./pages/EnterOtp/EnterOtp";
import Footer from "./pages/Footer/Footer";
import ForgotPassword from "./pages/Forgotpassword/ForgotPassword";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PasswordReset from "./pages/PasswordRecover/PasswordReset";
import Experience from "./pages/AfterSignUp/Experience/Experience";
import Industry from "./pages/AfterSignUp/Industry/Industry";
import Role from "./pages/AfterSignUp/Role/Role";

function App() {
  const user = useSelector(selectUser);
  const newUser = useSelector(selectNewUser);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       dispatch(
  //         login({
  //           email: auth.currentUser.email,
  //           uid: auth.currentUser.uid,
  //           displayName: auth.currentUser.displayName,
  //           photoURL: auth.currentUser.photoURL,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  // }, []);

  return (
    <Routes>
      <Route path="/" element={user ? <Community /> : <Home />} />
      <Route path="/signup" element={user ? <Community /> : <Auth />} />
      <Route path="/login" element={user ? <Community /> : <Login />} />
      <Route
        path="/forgotpassword"
        element={user ? <Community /> : <ForgotPassword />}
      />
      <Route
        path="/password-reset"
        element={user ? <Community /> : <PasswordReset />}
      />
      {newUser ? (
        <Route
          path="enterotp"
          element={user ? <Community /> : <EnterOtp />}
        ></Route>
      ) : null}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    // <div>
    //   <Header />
    //   <Experience />
    //   <Footer />
    // </div>
  );
}

export default App;
