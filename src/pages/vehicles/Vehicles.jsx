import React from "react";
import Tabs from "./components/Tabs";
import { IMAGES } from "../../assets/images.js";
import CarCard from "../../layout/CarCard";
import Logos from "./components/Logos";

const Vehicles = () => {
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
      <section>
        <div className="flex justify-center items-center gap-6">
          <Tabs children="All vehicles" />
          <Tabs children="Sedan" image={IMAGES.sedan} variant="ghost" />
          <Tabs children="Cabriolet" image={IMAGES.cabriolet} variant="ghost" />
          <Tabs children="Pickup" image={IMAGES.pickup} variant="ghost" />
          <Tabs children="SUV" image={IMAGES.suv} variant="ghost" />
          <Tabs children="MiniVan" image={IMAGES.minivan} variant="ghost" />
        </div>
      </section>

      {/* Car section */}
      <section>
        <div className="max-w-[90%] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center mt-10">
          {CARS_DATA.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      {/* Logos Section */}
      <Logos />
    </div>
  );
};

export default Vehicles;
