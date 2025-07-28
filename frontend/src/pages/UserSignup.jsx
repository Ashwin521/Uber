import React, { useState } from "react";
import { Link } from "react-router-dom";
import UberImg from "../assets/Uber-Logo.wine.png";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      username: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    });
    console.log(userData);

    setEmail("");
    setFirstName("");
    setLastname("");
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
                  value={firstname}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  required
                  placeholder="firstname"
                />

                <input
                  className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2  text-base placeholder:text-sm "
                  type="text"
                  value={lastname}
                  onChange={(e) => {
                    setLastname(e.target.value);
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
                Login
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
              By proceeding, you consent to get calls, WhatsApp or SMS/RCS
              messages, including by automated means, from Uber and its
              affiliates to the number provided.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
