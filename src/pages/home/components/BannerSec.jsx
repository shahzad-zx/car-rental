import React from 'react';
import { Car, UserCheck, CalendarDays, Gauge } from "lucide-react";
import StatsCard from './StatsCard';
import { url } from 'zod';
import {IMAGES}  from '../../../assets/images.js'

const BannerSec = () => {
  const STATS_DATA = [
    { id: 1, icon: Car, value: "540+", label: "Cars" },
    { id: 2, icon: UserCheck, value: "20k+", label: "Customers" },
    { id: 3, icon: CalendarDays, value: "25+", label: "Years" },
    { id: 4, icon: Gauge, value: "20m+", label: "Miles" },
  ];

  return (
    <section className="max-w-8xl mx-auto px-4 mb-10 ">
      <div 
      style={{ backgroundImage: `url(${IMAGES.BannerTire})` }}
      className="bg-[#5842E3] rounded-[40px] h-[456px]  px-6 relative overflow-hidden">
        {/* <StatCard */}
        {/* <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div  className="absolute top-0 left-0 w-full h-full  bg-repeat opacity-20 rotate-12 scale-150"></div>
        </div> */}

        {/* Text */}
        <div className="text-center text-white relative z-10 mb-15 pt-[60px]  ">
          <h2 className="text-6xl md:text-5xl font-extrabold mb-5">Facts In Numbers</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper 
            in. Diam tincidunt tincidunt erat at semper fermentum.
          </p>
        </div>

        {/* Stats  Card */}
        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          {STATS_DATA.map((stat) => (
            <StatsCard 
              key={stat.id} 
              icon={stat.icon} 
              value={stat.value} 
              label={stat.label} 
            />
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerSec;