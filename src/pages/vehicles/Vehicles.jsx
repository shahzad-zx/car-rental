import React from "react";
import Tabs from "./components/Tabs";
import { IMAGES } from "../../assets/images.js";
import { motion } from "framer-motion";
import CarCard from "../../layout/CarCard";
import Logos from "./components/Logos";

const Vehicles = () => {
  // Animation on card
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const CARS_DATA = [
    {
      id: 1,
      name: "Mercedes",
      type: "Sedan",
      price: 25,
      transmission: "Automat",
      fuel: "PB 95",
      ac: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKLizXt1Rndi2b9JhPyJvHbGR0XxGpoebNg&s",
    },
    {
      id: 2,
      name: "Mercedes",
      type: "Sport",
      price: 50,
      transmission: "Automat",
      fuel: "PB 95",
      ac: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFlrrOAPOi6iLNnvhg6xHTjglYVx3lVCuLA&s",
    },
    {
      id: 3,
      name: "BMW",
      type: "Sedan",
      price: 45,
      transmission: "Automat",
      fuel: "PB 95",
      ac: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjaf7sPOqickxketrujTs75x5W6rKvmwQjQw&s",
    },
    {
      id: 4,
      name: "Porsche",
      type: "SUV",
      price: 40,
      transmission: "Automat",
      fuel: "PB 95",
      ac: true,
      image: IMAGES.porsche,
    },
    {
      id: 5,
      name: "Toyota",
      type: "Sedan",
      price: 35,
      transmission: "Automat",
      fuel: "PB 95",
      ac: true,
      image: IMAGES.toyota,
    },
    {
      id: 6,
      name: "Porsche",
      type: "SUV",
      price: 50,
      transmission: "Automat",
      fuel: "PB 95",
      ac: true,
      image: IMAGES.porsche911,
    },
    // ... add more car objects here
  ];
  return (
    <div>
      {/* <h2>Vehiles</h2> */}
      <h1 className="text-center font-bold text-5xl mt-8 mb-10 ">
        Select a vehicle group
      </h1>
      {/* <section className="flex  flex-wrap items-center justify-start md:justify-center gap-3 md:gap-6 overflow-x-auto no-scrollbar px-4 pb-2 "> 
        <div className="flex justify-center items-center gap-6">
          <Tabs children="All vehicles" />
          <Tabs children="Sedan" image={IMAGES.sedan} variant="ghost" />
          <Tabs children="Cabriolet" image={IMAGES.cabriolet} variant="ghost" />
          <Tabs children="Pickup" image={IMAGES.pickup} variant="ghost" />
          <Tabs children="SUV" image={IMAGES.suv} variant="ghost" />
          <Tabs children="MiniVan" image={IMAGES.minivan} variant="ghost" />
        </div>
      </section> */}

      <section className="flex flex-wrap items-center justify-start md:justify-center gap-3 md:gap-6 px-4 pb-2">
        {/* 
      1. Removed the extra inner <div> wrapper 
      2. Added responsive width classes to the Tabs 
  */}
        <Tabs
          className="w-[calc(33.33%-0.5rem)] md:w-auto"
          children="All vehicles"
        />
        <Tabs
          className="w-[calc(33.33%-0.5rem)] md:w-auto"
          children="Sedan"
          image={IMAGES.sedan}
          variant="ghost"
        />
        <Tabs
          className="w-[calc(33.33%-0.5rem)] md:w-auto"
          children="Cabriolet"
          image={IMAGES.cabriolet}
          variant="ghost"
        />
        <Tabs
          className="w-[calc(50%-0.5rem)] md:w-auto"
          children="Pickup"
          image={IMAGES.pickup}
          variant="ghost"
        />
        <Tabs
          className="w-[calc(50%-0.5rem)] md:w-auto"
          children="SUV"
          image={IMAGES.suv}
          variant="ghost"
        />
        <Tabs
          className="w-full md:w-auto"
          children="MiniVan"
          image={IMAGES.minivan}
          variant="ghost"
        />
      </section>

      {/* Car section */}
      <section>
        {/* <div className="max-w-[90%] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center mt-10">
          {CARS_DATA.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div> */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-[90%] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center mt-8 place-items-center "
        >
          {CARS_DATA.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </motion.div>
      </section>

      {/* Logos Section */}
      <Logos />
    </div>
  );
};

export default Vehicles;
