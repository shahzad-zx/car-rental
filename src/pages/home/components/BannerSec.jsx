import React from 'react';
import { Car, UserCheck, CalendarDays, Gauge } from "lucide-react";
import StatsCard from './StatsCard';
import { url } from 'zod';
import {IMAGES}  from '../../../assets/images.js'


import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const AnimatedNumber = ({ value, duration = 2 }) => {
  const ref = useRef(null);
  // once: false ensures the animation triggers every time it enters the viewport
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let controls;
    if (isInView) {
      // Reset to 0 when it comes into view
      count.set(0);
      // Start animation
      controls = animate(count, numericValue, {
        duration: duration,
        ease: "easeOut",
      });
    } else {
      // Optional: Reset value to 0 when it leaves view so it's ready for next time
      count.set(0);
    }

    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    
    return () => {
      if (controls) controls.stop();
      unsubscribe();
    };
  }, [isInView, numericValue, count, rounded, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};
const BannerSec = () => {
  const STATS_DATA = [
    { id: 1, icon: Car, value: "540+", label: "Cars" },
    { id: 2, icon: UserCheck, value: "20k+", label: "Customers" },
    { id: 3, icon: CalendarDays, value: "25+", label: "Years" },
    { id: 4, icon: Gauge, value: "20m+", label: "Miles" },
  ];

  return (
    // <section className="max-w-8xl mx-auto px-4 mb-10 ">
    //   <div 
    //   style={{ backgroundImage: `url(${IMAGES.BannerTire})` }}
    //   className="bg-[#5842E3] rounded-[40px] h-[456px]  px-6 relative overflow-hidden">
    //     {/* <StatCard */}
    //     {/* <div className="absolute inset-0 opacity-10 pointer-events-none">
    //        <div  className="absolute top-0 left-0 w-full h-full  bg-repeat opacity-20 rotate-12 scale-150"></div>
    //     </div> */}

    //     {/* Text */}
    //     <div className="text-center text-white relative z-10 mb-15 pt-[60px]  ">
    //       <h2 className="text-6xl md:text-5xl font-extrabold mb-5">Facts In Numbers</h2>
    //       <p className="text-indigo-100 max-w-2xl mx-auto opacity-90 leading-relaxed">
    //         Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper 
    //         in. Diam tincidunt tincidunt erat at semper fermentum.
    //       </p>
    //     </div>

    //     {/* Stats  Card */}
    //     <div className="flex flex-wrap justify-center gap-6 relative z-10">
    //       {STATS_DATA.map((stat) => (
    //         <StatsCard 
    //           key={stat.id} 
    //           icon={stat.icon} 
    //           value={stat.value} 
    //           label={stat.label} 
    //         />
            
    //       ))}
    //     </div>
    //   </div>
    // </section>


   <section className="max-w-8xl mx-auto px-4 mb-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        // once: false makes the container animate every time you scroll back to it
        viewport={{ once: false, amount: 0.3 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ 
          backgroundImage: `url(${IMAGES.BannerTire})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className="bg-[#5842E3] rounded-[40px] h-auto min-h-[456px] py-16 px-6 relative overflow-hidden"
      >
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-indigo-900/20 pointer-events-none" />

        {/* Header Text */}
        <div className="text-center text-white relative z-10 mb-12">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold mb-5"
          >
            Facts In Numbers
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-indigo-100 max-w-2xl mx-auto opacity-90 leading-relaxed"
          >
            Our journey in numbers reflects the trust of thousands and the miles of memories we've helped create.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          {STATS_DATA.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index + 0.4 }}
            >
              <StatsCard 
                icon={stat.icon} 
                value={<AnimatedNumber value={stat.value} duration={2.5} />} 
                label={stat.label} 
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BannerSec;