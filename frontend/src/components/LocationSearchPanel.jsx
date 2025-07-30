import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {
  console.log(props);

  // sample array for locations
  const locations = [
    "24B,Near Kapoor's cafe,Thane",
    "22A,Near Malhotra's cafe,Bhiwandi",
    "21C,Near Punjabi Dhaba,Kalyan",
    "20D,Near ST bus stand,Mulund",
  ];

  return (
    <div>
      {locations.map(function (elem,id) {
        return (
          <div key={id}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 active:border-black border-gray-50 border-2 p-3 rounded-xl items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
