import React from "react";
import {Link} from "react-router-dom"
const FinishRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Finish This ride to {" "}
      </h3>

      <div className="flex items-center p-4 border-2 border-yellow-400 rounded-lg justify-between mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 rounded-full object-cover w-10"
            src="https://www.investopedia.com/thmb/H_n5_g-yayKPIZGFZ7GV3B0Pbi0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Uber-f9292bc715574731b056150244df9d41.jpg"
          />
          <h2 className="text-lg font-medium">Harshi Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 ">
            <i className=" ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab,Ahmedabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            {" "}
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab,Ahmedabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">$1193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full">
          
            <Link
              to="/captain-home"
              className="w-full flex justify-center mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg"
            >
              Finish Ride
            </Link>

            <p className=" mt-10 text-xs">Click on finish ride button if you have completed the payment </p>

            
          
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
