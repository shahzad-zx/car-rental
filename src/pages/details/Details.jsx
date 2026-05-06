import React from "react";
import {IMAGES} from '../../assets/images.js'
import { Button } from "../../components/ui/Button.jsx";
import EquipmentItem from "./component/EquipmentItem.jsx";
import SpecCard from "./component/SpecCard.jsx";
import CarCard from "../../layout/CarCard.jsx";
const Details = () => {
    const specs = [
    { label: "Gear Box", value: "Automat", image: IMAGES.gImg },
    { label: "Fuel", value: "Petrol", image: IMAGES.fuel },
    { label: "Doors", value: "2", image: IMAGES.door },
    { label: "Air Conditioner", value: "Yes", image: IMAGES.gImg },
    { label: "Seats", value: "5", image: IMAGES.user },
    { label: "Distance", value: "500", image: IMAGES.distance },
  ];


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
  const equipment = ["ABS", "Air Bags", "Cruise Control", "ABS", "Air Bags", "Air Conditioner"];
  return (
   <section className="max-w-8xl mx-auto items-center  py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Left Section: Visuals */}
        <div className="lg:w-1/2 space-y-8">
          <div>
            <h2 className="font-extrabold text-5xl text-gray-900 mb-2">BMW</h2>
            <div className="flex items-baseline gap-1">
              <span className="text-[#5842E3] font-bold text-4xl">$25</span>
              <span className="text-gray-400 text-lg">/ day</span>
            </div>
          </div>

          <div className="relative">
            <img src={IMAGES.porsche911} alt="BMW" className="w-full object-contain" />
          </div>

          {/* <div className="flex gap-4">
            {[IMAGES.thumb1, IMAGES.thumb2, IMAGES.thumb3].map((img, i) => (
              <img key={i} src={img} alt="preview" className="w-1/3 rounded-xl cursor-pointer hover:opacity-80 transition" />
            ))}
          </div> */}
        </div>

        {/* Right Section: Specs & Features */}
        <div className="lg:w-1/2 space-y-10">
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Technical Specification</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {specs.map((spec, index) => (
                <SpecCard key={index} {...spec} />
              ))}
            </div>
          </div>

          <Button children="Rent a Car" >
           
          </Button>

          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Car Equipment</h4>
            <div className="grid grid-cols-2 gap-y-4">
              {equipment.map((item, index) => (
                <EquipmentItem key={index} label={item} />
              ))}
            </div>
          </div>
        </div>

      </div>

        {/* Car section */}
            <section>
              <div className="max-w-[90%] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center mt-10">
                {CARS_DATA.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            </section>
    </section>
  );
};

export default Details;
