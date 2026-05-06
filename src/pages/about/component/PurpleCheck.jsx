import React from "react";

const PurpleCheck = ({ text }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-[#5842E3] rounded-full p-1 text-white mt-1 flex-shrink-0">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* text */}
     <p className="text-gray-500 text-sm leading-relaxed">
      {text}
    </p>
    </div>
  );
};

export default PurpleCheck;
