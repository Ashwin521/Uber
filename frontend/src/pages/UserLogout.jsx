import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      const token = localStorage.getItem("token");
      console.log("Token from localStorage:", token);

      if (!token) {
        console.warn("No token found, skipping logout request.");
        navigate("/login");
        return;
      }

      try {
        await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.error("Logout error:", error.response?.data || error.message);
      } finally {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    logout();
  }, [navigate]);

  return <div className="text-center mt-10 text-gray-500">Logging out...</div>;
};

export default UserLogout;
