import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import UberImg from "../assets/Uber-Logo.wine.png";
const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);

  const finishRidePanelRef = useRef(null);
  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen relative">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen ">
        <img className="w-16" src={UberImg} alt="" />
        <Link
          to="/captain-home"
          className="   h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      {/* Top Half - Image */}
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Riding animation"
        />
      </div>
      <div
        onClick={() => {
          setFinishRidePanel(true);
        }}
        className="h-1/5 p-6  flex items-center justify-between bg-yellow-400 relative"
      >
        <h5
          onClick={() => {}}
          className="p-1 text-center w-[95%] absolute top-0"
        >
          <i className="text-3xl text-gray-800 ri-arrow-down-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold ">4 KM away</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed z-10  h-screen bg-white translate-y-full  bottom-0 px-6 pt-12 w-full py-8 "
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
