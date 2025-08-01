import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UberImg from "../assets/Uber-Logo.wine.png";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const { user, setUser } = React.useContext(UserDataContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_APP_BASE_URL}/users/register`,
      newUser
    );
    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };

  return (
    <>
      <div>
        <div className="p-7 h-screen flex flex-col justify-between ">
          <div>
            <img className="w-16 mb-10" src={UberImg} alt="" />

            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
              className="text-lg font-medium mb-2"
            >
              <h3 className="text-lg font-medium mb-2">What's your name</h3>

              <div className="flex gap-4 mb-5 ">
                <input
                  className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm "
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  required
                  placeholder="firstname"
                />

                <input
                  className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2  text-base placeholder:text-sm "
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  required
                  placeholder="lastname"
                />
              </div>

              <h3 className="text-base font-medium mb-2">What's your email</h3>

              <input
                className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm "
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                placeholder="Email@example.com"
              />

              <h3 className="text-base font-medium mb-2">Enter password</h3>

              <input
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm "
              />
              <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-sm ">
                Create Account
              </button>

              <p className="text-center">
                Akready have a account?{" "}
                <Link to="/login" className="text-blue-600">
                  Login here
                </Link>
              </p>
            </form>
          </div>
          <div>
            <p className="text-[6px] leading-tight">
              This site is protected by reCAPTCHA and the{" "}
              <span className="underline"> Google Privacy Policy</span> and
              <span className="underline"> Terms of Service apply</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
