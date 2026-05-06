import React, { useState } from 'react';

const AccordianItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-300 rounded-[20px] mb-4 overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-gray-900">{question}</span>
        {/* Chevron Icon that rotates when open */}
        <svg
          className={`w-5 h-5 text-gray-900 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Answer Area with smooth transition */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 md:px-8 pb-8 text-gray-500 leading-relaxed text-sm md:text-base">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default AccordianItem;