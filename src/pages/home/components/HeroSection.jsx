// import React from 'react'
// import { Car, Phone, Calendar, MapPin, Wallet } from "lucide-react";
// import {Button} from "../../../components/ui/Button";
// import {FormInput} from "../../../components/ui/FormInput";
// import {FormSelect} from "../../../components/ui/FormSelect";

// const HeroSection = () => {
//   return (
//   <div className="bg-[#5842E3] rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden min-h-[550px]">
      
//       <div className="absolute inset-0 opacity-10 pointer-events-none scale-150 rotate-12">
        
//         <svg width="100%" height="100%">
//           <defs>
//             <pattern id="p" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
//               <path d="M0 50 Q 25 0, 50 50 T 100 50" fill="none" stroke="white" strokeWidth="8" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#p)" />
//         </svg>
//       </div>

//       <div className="lg:w-[650px] text-white z-10">
//         <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Experience the road <br /> like never before</h1>
//         <p className="text-indigo-100 max-w-md mb-8 text-lg opacity-90">Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida.</p>
//         <Button variant="primary" className=' bg-orange-500 hover:bg-orange-600 cursor-pointer'>View all cars</Button>
//       </div>

    
//       <div className="lg:w-[400px] bg-white rounded-3xl p-8 shadow-2xl z-10 mt-12 lg:mt-0 w-full">
//         <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Book your car</h3>
//         <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//           <FormSelect placeholder="Car type" options={["SUV", "Sedan", "Luxury"]} />
//           <FormSelect placeholder="Place of rental" options={["Airport", "City Center"]} />
//           <FormSelect placeholder="Place of return" options={["Airport", "City Center"]} />
//           <FormInput placeholder="Rental date" icon={Calendar} />
//           <FormInput placeholder="Return date" icon={Calendar} />
//           <Button variant="full" className='bg-orange-500 hover:bg-orange-600 cursor-pointer'>Book now</Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;





// The new HeroSectioin.jsx
import React from 'react'
import { Calendar } from "lucide-react";
import { Button } from "../../../components/ui/Button";
import { FormInput } from "../../../components/ui/FormInput";
import { FormSelect } from "../../../components/ui/FormSelect";

const HeroSection = () => {
  return (
    <div className="w-full md:max-w-7xl mx-auto bg-[#5842E3] rounded-none md:rounded-[40px] p-6 sm:p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">
      
      {/* Background SVG Pattern - Hidden on mobile for better performance/clarity */}
      <div className="absolute inset-0 opacity-10 pointer-events-none scale-150 rotate-12 hidden sm:block">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="p" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 0, 50 50 T 100 50" fill="none" stroke="white" strokeWidth="8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#p)" />
        </svg>
      </div>

      {/* Text Content */}
      <div className="w-full lg:max-w-[50%] xl:max-w-[650px] text-white z-10 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
          Experience the road <br className="hidden md:block" /> like never before
        </h1>
        <p className="text-indigo-100 mx-auto lg:mx-0 max-w-sm md:max-w-md mb-8 text-base md:text-lg opacity-90">
          Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button variant="primary" className='bg-orange-500 hover:bg-orange-600 cursor-pointer px-8 py-6 text-lg'>
            View all cars
          </Button>
        </div>
      </div>

      {/* Form Content */}
      <div className="w-full sm:max-w-[450px] lg:max-w-[400px] bg-white rounded-3xl p-6 md:p-8 shadow-2xl z-10 mt-10 lg:mt-0">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-gray-800">
          Book your car
        </h3>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-4">
             <FormSelect placeholder="Car type" options={["SUV", "Sedan", "Luxury"]} />
             <FormSelect placeholder="Place of rental" options={["Airport", "City Center"]} />
             <FormSelect placeholder="Place of return" options={["Airport", "City Center"]} />
             
             {/* Optional: On tablet/desktop show dates side by side */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <FormInput placeholder="Rental date" icon={Calendar} />
                <FormInput placeholder="Return date" icon={Calendar} />
             </div>
          </div>
          
          <Button variant="full" className='w-full bg-orange-500 hover:bg-orange-600 cursor-pointer py-4'>
            Book now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;