import React from "react";
import { Settings, Fuel, Snowflake } from "lucide-react";
import { Button } from "../components/ui/Button";
import { IMAGES } from "../assets/images.js";

const CarCard = ({ car }) => {
  const { name, type, price, image, transmission, fuel, ac } = car;

  return (
    <div className="w-[416px] p-3 mb-14 bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow duration-300 group overflow-hidden">
      <div className="mb-3 h-[240px] overflow-hidden rounded-2xl border border-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>

      {/* Title & Price Header */}
      <div className="h-[115px]">
        <div className=" mt-5 flex justify-between items-start mb-0  ">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
            <p className="text-gray-400 text-base">{type}</p>
          </div>
          <div className="text-right">
            <span className="text-indigo-600 font-bold text-2xl">${price}</span>
            <p className="text-gray-400 text-base">per day</p>
          </div>
        </div>

        {/* Features Icons */}
        <div className="grid grid-cols-3 my-6 border-t border-gray-100 pt-0 px-2 mb-10">
          <div className="flex  items-center gap-1 ">
            {/* <Settings size={18} className="text-gray-400" /> */}
            <img className="text-black " src={IMAGES.gImg} alt="automat" />
            <span className="text-[16px] text-gray-500 font-medium">
              {transmission}
            </span>
          </div>
          <div className=" flex  items-center gap-1 border-x border-gray-100 ">
            {/* <Fuel size={18} className="text-gray-400" /> */}
            <img className="text-black " src={IMAGES.fuel} alt="fuel" />

            <span className="text-[16px] text-gray-500 font-medium">
              {fuel}
            </span>
          </div>
          <div className="flex items-center gap-1 ml-[-20px]">
            {/* <Snowflake size={18} className="text-gray-400" /> */}
            <img className="text-black " src={IMAGES.airCondition} alt="air Conditioner" />

            <span className="text-[16px] text-gray-500 font-medium">
              {ac ? "Air Conditioner" : "No AC"}
            </span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <Button variant="full" className="mt-0 bg-[#5842E3] hover:bg-[#4a36c7]">
        View Details
      </Button>
    </div>
  );
};

export default CarCard;
