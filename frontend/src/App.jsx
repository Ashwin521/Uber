import React from "react";
import Home from "../src/pages/Home";
import UserLogin from "../src/pages/UserLogin";
import UserSignup from "../src/pages/UserSignup";
import CaptainLogin from "../src/pages/CaptainLogin";
import CaptainSignup from "../src/pages/CaptainSignup";

import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
      </Routes>
    </>
  );
};

export default App;
