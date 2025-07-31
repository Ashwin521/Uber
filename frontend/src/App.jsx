import React, { useContext } from "react";
import Start from "../src/pages/Start";
import UserLogin from "../src/pages/UserLogin";
import UserSignup from "../src/pages/UserSignup";
import CaptainLogin from "../src/pages/CaptainLogin";
import CaptainSignup from "../src/pages/CaptainSignup";
import CaptainHome from "../src/pages/CaptainHome";
import "remixicon/fonts/remixicon.css"
import CaptainProtectWrapper from "../src/pages/CaptainProtectWrapper"
import UserLogout from "../src/pages/UserLogout";
import CaptainRiding from "../src/pages/CaptainRiding"
import Home from "../src/pages/Home";
import UserProtectWrapper from "../src/pages/UserProtectWrapper";
import Riding from "../src/pages/Riding"
import { UserDataContext } from "./context/UserContext";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route  path="/riding" element={<Riding/>} />
        <Route  path="/captain-riding" element={<CaptainRiding/>} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              {" "}
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrapper>
              {" "}
              <CaptainHome />{" "}
            </CaptainProtectWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />
      </Routes>
    </>
  );
};

export default App;
