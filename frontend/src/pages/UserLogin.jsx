import React, { useState, useContext } from "react";
import UberImg from "../assets/Uber-Logo.wine.png";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_APP_BASE_URL}/users/login`,
      userData
    );
    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="p-7 h-screen flex flex-col justify-between ">
        <div>
          <img className="w-16 mb-10" src={UberImg} alt="" />

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="text-lg font-medium mb-2"
          >
            <h3 className="text-lg font-medium mb-2">What's your email</h3>

            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
              type="email"
              required
              placeholder="Email@example.com"
            />

            <h3 className="text-lg font-medium mb-2">Enter password</h3>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            />
            <button
              onClick={submitHandler}
              className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base "
            >
              Login
            </button>

            <p className="text-center">
              New here?{" "}
              <Link to="/signup" className="text-blue-600">
                Create new account
              </Link>
            </p>
          </form>
        </div>
        <div>
          <Link
            to="/captain-login"
            className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base "
          >
            Sign in as Captain
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
