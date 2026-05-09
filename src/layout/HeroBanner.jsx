// // src/components/layout/HeroBanner.jsx
// import React from 'react';
// import SearchBar from '../pages/home/components/SearchBar';

// const HeroBanner = ({ title, description, photo, className = "" }) => {
//   return (
//     <section className={`max-w-7xl mx-auto px-4 py-10 mb-20 ${className}`}>
//       <div className="bg-[#5842E3] rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden min-h-[500px]">
        
     

//         {/* Left Side Content */}
//         <div className="lg:w-2/3 text-white z-10 ">
//           <h1 className="text-5xl md:text-[50px] font-extrabold leading-tight mb-6">
//             {title}
//           </h1>
//           <p className="text-indigo-100 max-w-md mb-8 text-lg opacity-90 leading-relaxed">
//             {description}
//           </p>
//           {/* Default button as seen in first image */}
//           <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all">
//             View all cars
//           </button>
          
//         </div>

//         {/* Right Side Slot: This is where we inject the Form or Search bar */}
//         <div className="w-1/3 lg:w-auto z-10 mt-12 lg:mt-0 flex justify-center">
//           <img src={photo} alt="" className='w-full max-w-md h-auto object-contain ' />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroBanner;




// The new HeroBanner.jsx
import React from 'react';

const HeroBanner = ({ title, description, photo, className = "" }) => {
  return (
    <section className={`max-w-7xl mx-auto px-4 py-6 md:py-10 mb-10 md:mb-20 ${className}`}>
      {/* 
        Container adjustments:
        - rounded-3xl on mobile, rounded-[40px] on desktop
        - min-h-auto on mobile to prevent overflow
      */}
      <div className="bg-[#5842E3] rounded-3xl md:rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden min-h-auto lg:min-h-[500px]">
        
        {/* Left Side Content */}
        <div className="w-full lg:w-3/5 text-white z-10 text-center lg:text-left">
          {/* Fluid Typography: 3xl on mobile, 5xl on desktop */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold leading-tight mb-4 md:mb-6">
            {title}
          </h1>
          
          <p className="text-indigo-100 mx-auto lg:mx-0 max-w-md mb-8 text-base md:text-lg opacity-90 leading-relaxed">
            {description}
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-10 rounded-xl transition-all w-full sm:w-auto">
              View all cars
            </button>
          </div>
        </div>

        {/* Right Side Image 
            - w-full on mobile to let the image be visible
            - mt-10 to separate from text when stacked
        */}
        <div className="w-full lg:w-2/5 z-10 mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <img 
            src={photo} 
            alt="Hero Visual" 
            className="w-full max-w-[300px] sm:max-w-md lg:max-w-full h-auto object-contain transform lg:scale-110" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;