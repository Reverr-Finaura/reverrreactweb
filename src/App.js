import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import ForgotPassword from "./pages/Forgotpassword/ForgotPassword";
import Login from "./pages/Login/Login";
import PasswordReset from "./pages/PasswordRecover/PasswordReset";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/password-reset" element={<PasswordReset />} />
    </Routes>
  );
}

export default App;
