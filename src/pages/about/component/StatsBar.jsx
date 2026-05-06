import React from "react";

const StatsBar = () => {
  const stats = [
    { value: "20k+", label: "Happy customers" },
    { value: "540+", label: "Count of cars" },
    { value: "25+", label: "Years of experince" },
  ];
  return (
    <div className="w-full py-12 bg-white">
      <div className=" max-w-8xl mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center space-y-2"
            >
              <h2 className="text-6xl md:text-7xl font-extrabold text-[#5842E3] tracking-tight">
                {stat.value}
              </h2>
              <p className="text-gray-900 font-bold text-lg ">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default StatsBar;
