import React from 'react'

const StatsCard = ({ icon: Icon, value, label }) => {
  return (
     <div className="bg-white rounded-3xl p-4 flex items-center gap-6 shadow-sm min-w-[240px]">
      {/* Icon Container */}
      <div style={{backgroundColor : '#FF9E0C'}} className=" p-4 rounded-2xl text-white flex items-center justify-center">
        <Icon size={32} strokeWidth={2.5} />
      </div>
      
      {/* Text Container */}
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-gray-900 leading-tight">
          {value}
        </span>
        <span className="text-gray-400 text-sm font-medium">
          {label}
        </span>
      </div>
    </div>
  )
}

export default StatsCard


