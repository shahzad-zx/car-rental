import React from "react";

const InfoItem = ({ number, title, description }) => {
  return (
    <div>
      <div className="flex gap-4 mb-8">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
          {number}
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
          <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoItem;
