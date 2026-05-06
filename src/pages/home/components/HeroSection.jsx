import React from 'react'
import { Car, Phone, Calendar, MapPin, Wallet } from "lucide-react";
import {Button} from "../../../components/ui/Button";
import {FormInput} from "../../../components/ui/FormInput";
import {FormSelect} from "../../../components/ui/FormSelect";

const HeroSection = () => {
  return (
  <div className="bg-[#5842E3] rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden min-h-[550px]">
      
      <div className="absolute inset-0 opacity-10 pointer-events-none scale-150 rotate-12">
        
        <svg width="100%" height="100%">
          <defs>
            <pattern id="p" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 0, 50 50 T 100 50" fill="none" stroke="white" strokeWidth="8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#p)" />
        </svg>
      </div>

      <div className="lg:w-[650px] text-white z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Experience the road <br /> like never before</h1>
        <p className="text-indigo-100 max-w-md mb-8 text-lg opacity-90">Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida.</p>
        <Button variant="primary" className=' bg-orange-500 hover:bg-orange-600 cursor-pointer'>View all cars</Button>
      </div>

    
      <div className="lg:w-[400px] bg-white rounded-3xl p-8 shadow-2xl z-10 mt-12 lg:mt-0 w-full">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Book your car</h3>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <FormSelect placeholder="Car type" options={["SUV", "Sedan", "Luxury"]} />
          <FormSelect placeholder="Place of rental" options={["Airport", "City Center"]} />
          <FormSelect placeholder="Place of return" options={["Airport", "City Center"]} />
          <FormInput placeholder="Rental date" icon={Calendar} />
          <FormInput placeholder="Return date" icon={Calendar} />
          <Button variant="full" className='bg-orange-500 hover:bg-orange-600 cursor-pointer'>Book now</Button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;

