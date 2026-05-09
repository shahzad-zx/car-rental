// import React from 'react'
// import {IMAGES} from '../../../assets/images'

// const Logos = () => {
//     const brands = [
//     { name: 'Toyota', src: IMAGES.toyotaLogo },
//     { name: 'Ford', src: IMAGES.fordLogo },
//     { name: 'Mercedes', src: IMAGES.mercedesLogo },
//     { name: 'Jeep', src: IMAGES.jeepLogo },
//     { name: 'BMW', src: IMAGES.bmwLogo },
//     { name: 'Audi', src: IMAGES.audiLogo },
// ]
//   return (
//     <div>
//       {/* <section className="max-w-7xl mx-auto px-4 py-12">
//       {/* Container: Soft gray background with large pill rounding */}
//       <div className="max-w-7xl h-[174px]  mb-20 mx-auto bg-[#F8F8F8] rounded-[40px] px-8 py-10 md:py-14 flex flex-wrap items-center justify-between gap-12 md:gap-20 lg:gap-24">
        
//         {brands.map((brand, index) => (
//           <div 
//             key={index} 
//             className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 cursor-pointer"
//           >
//             {/* The Image Tag with empty src as requested */}
//             <img 
//               src={brand.src} 
//               alt={brand.name} 
//               className="h-8 md:h-12 w-auto object-contain max-w-[120px]" 
//             />
//           </div>
//         ))}

//       </div>
//     {/* </section> */} */
    
//     </div>
//   )
// }

// export default Logos




// All new Logos.jsx section 
// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { IMAGES } from '../../../assets/images';

// const AnimatedLogo = ({ src, name, index, centerIndex, scrollYProgress }) => {
//   const distanceFromCenter = index - centerIndex;

//   // Use a spring for that "smooth/floaty" feel
//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 60,
//     damping: 25,
//   });

//   /**
//    * THE LOGIC: [Start of scroll, Middle, End of scroll]
//    * X: Starts wide -> hits 0 (center) -> ends closer to 0 (merged)
//    * Scale: Starts small -> hits 1 (full size) -> stays 1 or slightly smaller
//    */
//   const x = useTransform(
//     smoothProgress, 
//     [0, 0.5, 1], 
//     [distanceFromCenter * 200, 0, distanceFromCenter * -30] // -30 pulls them slightly back "in"
//   );
  
//   const y = useTransform(smoothProgress, [0, 0.5, 1], [100, 0, 0]);
  
//   const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

//   // Keep scaling minimal during exit
//   const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.7, 1, 0.95]);

//   return (
//     <motion.div
//       style={{ x, y, scale, opacity }}
//       whileHover={{ 
//         scale: 1.15, 
//         rotate: 3,
//         filter: "grayscale(0%)",
//       }}
//       transition={{ type: "spring", stiffness: 400, damping: 15 }}
//       className="flex items-center justify-center grayscale cursor-pointer"
//     >
//       <img
//         src={src}
//         alt={name}
//         className="h-8 md:h-10 w-auto object-contain max-w-[110px] pointer-events-none"
//       />
//     </motion.div>
//   );
// };

// const Logos = () => {
//   const targetRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     // We track the section from the moment it enters until it's fully gone
//     offset: ["start end", "end start"], 
//   });

//   const brands = [
//     { name: 'Toyota', src: IMAGES.toyotaLogo },
//     { name: 'Ford', src: IMAGES.fordLogo },
//     { name: 'Mercedes', src: IMAGES.mercedesLogo },
//     { name: 'Jeep', src: IMAGES.jeepLogo },
//     { name: 'BMW', src: IMAGES.bmwLogo },
//     { name: 'Audi', src: IMAGES.audiLogo },
//   ];

//   const centerIndex = (brands.length - 1) / 2;

//   return (
//     <div ref={targetRef} className="w-full py-[20vh] overflow-hidden">
//       {/* Container stays fixed in style, motion happens inside */}
//       <div className="max-w-7xl h-[160px] mx-auto bg-[#F8F8F8] rounded-[40px] px-12 flex items-center justify-between gap-4">
        
//         {brands.map((brand, index) => (
//           <AnimatedLogo
//             key={index}
//             index={index}
//             centerIndex={centerIndex}
//             src={brand.src}
//             name={brand.name}
//             scrollYProgress={scrollYProgress}
//           />
//         ))}

//       </div>
//     </div>
//   );
// };

// export default Logos;




// ========================
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { IMAGES } from '../../../assets/images';

const AnimatedLogo = ({ src, name, index, centerIndex, scrollYProgress }) => {
  const distanceFromCenter = index - centerIndex;

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
  });

  // RESPONSIVE X-CALCULATION
  // On small screens, we move them less (80px) so they don't fly off screen
  // On desktop, we use the original wider spread (200px)
  const xOffset = typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 200;

  const x = useTransform(
    smoothProgress, 
    [0, 0.5, 1], 
    [distanceFromCenter * xOffset, 0, distanceFromCenter * -20]
  );
  
  const y = useTransform(smoothProgress, [0, 0.5, 1], [50, 0, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.95]);

  return (
    <motion.div
      style={{ x, y, scale, opacity }}
      whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
      className="flex items-center justify-center grayscale cursor-pointer"
    >
      <img
        src={src}
        alt={name}
        className="h-6 md:h-10 w-auto object-contain max-w-[80px] md:max-w-[110px] pointer-events-none"
      />
    </motion.div>
  );
};

const Logos = () => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], 
  });

  const brands = [
    { name: 'Toyota', src: IMAGES.toyotaLogo },
    { name: 'Ford', src: IMAGES.fordLogo },
    { name: 'Mercedes', src: IMAGES.mercedesLogo },
    { name: 'Jeep', src: IMAGES.jeepLogo },
    { name: 'BMW', src: IMAGES.bmwLogo },
    { name: 'Audi', src: IMAGES.audiLogo },
  ];

  const centerIndex = (brands.length - 1) / 2;

  return (
    <div ref={targetRef} className="w-full py-[10vh] md:py-[20vh] overflow-hidden px-4">
      {/* 
          REWRITTEN CONTAINER:
          - grid-cols-3 on mobile to handle 6 logos (2 rows)
          - md:flex on tablet/desktop
          - Removed fixed height on mobile
      */}
      <div className="max-w-7xl min-h-[120px] md:h-[160px] mx-auto bg-[#F8F8F8] rounded-[30px] md:rounded-[40px] px-6 md:px-12 py-8 md:py-0 grid grid-cols-3 md:flex items-center justify-between gap-6 md:gap-4">
        
        {brands.map((brand, index) => (
          <AnimatedLogo
            key={index}
            index={index}
            centerIndex={centerIndex}
            src={brand.src}
            name={brand.name}
            scrollYProgress={scrollYProgress}
          />
        ))}

      </div>
    </div>
  );
};

export default Logos;