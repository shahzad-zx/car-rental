// src/components/ui/SearchBar.jsx
import React from 'react';

const SearchBar = () => {
  return (
    <div className="w-full w-50 mx-auto ">
      {/* Container: White pill with high padding for the 'inset' button look */}
      <div className="bg-white p-2 rounded-[30px] md:rounded-full flex items-center shadow-xl border border-gray-100">
        
        {/* Input field */}
        <input 
          type="text" 
          placeholder="City" 
          className="flex-1 px-6 bg-transparent outline-none text-gray-600 placeholder-gray-400 font-medium text-lg"
        />

        {/* Search Button */}
        <button className="bg-[#FF9F1C] hover:bg-orange-600 text-white px-10 py-4 rounded-[22px] md:rounded-full font-bold text-lg transition-all active:scale-95 shadow-md shadow-orange-200">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;