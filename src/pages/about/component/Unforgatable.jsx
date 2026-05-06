import React from "react";
import PurpleCheck from "./PurpleCheck";
import { IMAGES } from "../../../assets/images";

const Unforgatable = () => {
  const features = [
    "Velit semper morbi. Purus non eu cursus porttitor tristique et gravida...",
    "Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum",
    "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor",
    "Quis nunc interdum gravida ullamcorper",
  ];
  return <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side */}
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Unlock unforgettable memories on the road
          </h2>
          
          <p className="text-gray-500 leading-relaxed">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et 
            gravida. Quis nunc interdum gravida ullamcorper
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-4">
            {features.map((feature, index) => (
              <PurpleCheck key={index} text={feature} />
            ))}
          </div>
        </div>

        {/* Right Side: Image with custom rounding */}
        <div className="lg:w-1/2 w-full">
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            {/* Replace src with your final image path */}
            <img 
              src={IMAGES.roadCar}
              alt="Memories on the road" 
              className="w-full h-auto object-cover min-h-[400px]"
            />
          </div>
        </div>

      </div>
    </section>;
};

export default Unforgatable;
