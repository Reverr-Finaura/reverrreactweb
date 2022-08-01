import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
