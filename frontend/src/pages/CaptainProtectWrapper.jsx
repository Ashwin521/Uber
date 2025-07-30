import React, { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  // console.log(token);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token]);

  //because the token is same and the login page come again after refreshing that's why we will be using axios to fetch details from profile page
  axios
    .get(`${import.meta.env.VITE_APP_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setCaptain(response.data.captain);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      localStorage.removeItem("token");
      navigate("/captain-login");
    });
  if (isLoading) {
    return <div>Loading....</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;
