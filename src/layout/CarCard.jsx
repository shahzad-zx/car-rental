import React from "react";
import { Settings, Fuel, Snowflake } from "lucide-react";
import { Button } from "../components/ui/Button";
import { IMAGES } from "../assets/images.js";
import { motion } from "framer-motion";

const CarCard = ({ car }) => {
  // Stager animation : connect child card to stagger
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const { name, type, price, image, transmission, fuel, ac } = car;

  return (
    // <motion.div
    //   variants={cardVariants}
    //   transition={{ duration: 0.6 }}
    //   whileHover={{ y: -10 }}
    //   className=" p-3 mb-14 bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow duration-300 group overflow-hidden"
    // >
    //   <div className="mb-3 h-[240px] overflow-hidden rounded-2xl border border-gray-200">
    //     <img
    //       src={image}
    //       alt={name}
    //       className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
    //     />
    //   </div>

    //   {/* Title & Price Header */}
    //   <div className="h-[115px]">
    //     <div className=" mt-5 flex justify-between items-start mb-0  ">
    //       <div>
    //         <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
    //         <p className="text-gray-400 text-base">{type}</p>
    //       </div>
    //       <div className="text-right">
    //         <span className="text-indigo-600 font-bold text-2xl">${price}</span>
    //         <p className="text-gray-400 text-base">per day</p>
    //       </div>
    //     </div>

    //     {/* Features Icons */}
    //     <div className="grid grid-cols-3 my-6 border-t border-gray-100 pt-0 px-2 mb-10">
    //       <div className="flex  items-center gap-1 ">
          
    //         <img className="text-black " src={IMAGES.gImg} alt="automat" />
    //         <span className="text-[16px] text-gray-500 font-medium">
    //           {transmission}
    //         </span>
    //       </div>
    //       <div className=" flex  items-center gap-1 border-x border-gray-100 ">
    //         <img className="text-black " src={IMAGES.fuel} alt="fuel" />

    //         <span className="text-[16px] text-gray-500 font-medium">
    //           {fuel}
    //         </span>
    //       </div>
    //       <div className="flex items-center gap-1 ml-[-20px]">
    //         <img
    //           className="text-black "
    //           src={IMAGES.airCondition}
    //           alt="air Conditioner"
    //           loading="lazy"
    //         />

    //         <span className="text-[16px] text-gray-500 font-medium">
    //           {ac ? "Air Conditioner" : "No AC"}
    //         </span>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Action Button */}
    //   <motion.div whileTap={{ scale: 0.95 }}>
    //     <Button variant="full" className="mt-0 bg-[#5842E3] hover:bg-[#4a36c7]">
    //       View Details
    //     </Button>
    //   </motion.div>
    // </motion.div>



    <motion.div
  variants={cardVariants}
  transition={{ duration: 0.6 }}
  whileHover={{ y: -10 }}
  className="p-4 bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow duration-300 group overflow-hidden w-full max-w-[400px] mx-auto"
>
  <div className="mb-3 h-[200px] md:h-[240px] overflow-hidden rounded-2xl border border-gray-200">
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
    />
  </div>

  {/* Title & Price Header */}
  <div className="flex justify-between items-start mb-4 px-1">
    <div>
      <h3 className="text-xl md:text-2xl font-bold text-gray-900">{name}</h3>
      <p className="text-gray-400 text-sm md:text-base">{type}</p>
    </div>
    <div className="text-right">
      <span className="text-indigo-600 font-bold text-xl md:text-2xl">${price}</span>
      <p className="text-gray-400 text-xs md:text-sm">per day</p>
    </div>
  </div>

  {/* Features Icons - Using Flex-Col for better fit */}
  <div className="grid grid-cols-3 gap-1 my-6 border-t border-gray-100 pt-4 mb-8">
    <div className="flex flex-col items-center justify-center gap-1 text-center">
      <img className="h-5 w-5" src={IMAGES.gImg} alt="transmission" />
      <span className="text-[11px] lg:text-[13px] text-gray-500 font-medium leading-tight">
        {transmission}
      </span>
    </div>

    <div className="flex flex-col items-center justify-center gap-1 text-center border-x border-gray-100">
      <img className="h-5 w-5" src={IMAGES.fuel} alt="fuel" />
      <span className="text-[11px] lg:text-[13px] text-gray-500 font-medium leading-tight">
        {fuel}
      </span>
    </div>

    <div className="flex flex-col items-center justify-center gap-1 text-center">
      <img className="h-5 w-5" src={IMAGES.airCondition} alt="AC" />
      <span className="text-[11px] lg:text-[13px] text-gray-500 font-medium leading-tight">
        {ac ? "Air Cond." : "No AC"}
      </span>
    </div>
  </div>

  {/* Action Button */}
  <motion.div whileTap={{ scale: 0.98 }}>
    <Button variant="full" className="w-full py-3 bg-[#5842E3] hover:bg-[#4a36c7] text-white rounded-xl font-semibold transition-colors">
      View Details
    </Button>
  </motion.div>
</motion.div>
  );
};

export default CarCard;
