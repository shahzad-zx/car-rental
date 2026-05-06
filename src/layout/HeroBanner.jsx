// src/components/layout/HeroBanner.jsx
import React from 'react';
import SearchBar from '../pages/home/components/SearchBar';

const HeroBanner = ({ title, description, photo, className = "" }) => {
  return (
    <section className={`max-w-7xl mx-auto px-4 py-10 mb-20 ${className}`}>
      <div className="bg-[#5842E3] rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden min-h-[500px]">
        
     

        {/* Left Side Content */}
        <div className="lg:w-2/3 text-white z-10 ">
          <h1 className="text-5xl md:text-[50px] font-extrabold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-indigo-100 max-w-md mb-8 text-lg opacity-90 leading-relaxed">
            {description}
          </p>
          {/* Default button as seen in first image */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all">
            View all cars
          </button>
          
        </div>

        {/* Right Side Slot: This is where we inject the Form or Search bar */}
        <div className="w-1/3 lg:w-auto z-10 mt-12 lg:mt-0 flex justify-center">
          <img src={photo} alt="" className='w-full max-w-md h-auto object-contain ' />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;