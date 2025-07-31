import React from "react";
import "remixicon/fonts/remixicon.css";
import {Link} from "react-router-dom"
const Riding = () => {
  return (
    <div className="h-screen">
      <Link to="/home" className="fixed  right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      {/* Top Half - Image */}
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Riding animation"
        />
      </div>

      {/* Bottom Half - Details */}
      <div className="h-1/2 p-4 flex flex-col justify-between">
        {/* Driver Info */}
        <div className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
            alt="Driver"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Ashwin</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MH04 AB1173</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>

        {/* Address and Payment Info */}
        <div className="w-full mt-5 flex flex-col gap-4">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill text-xl"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Ahmedabad
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line text-xl"></i>
            <div>
              <h3 className="text-lg font-medium">$1193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <button className="mt-6 w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold p-3 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
