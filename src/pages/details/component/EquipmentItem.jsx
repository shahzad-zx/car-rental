import React from 'react'

const EquipmentItem = ({label}) => {
  return (
   <div className="flex items-center gap-3">
    <div className="bg-[#5842E3] rounded-full p-1 text-white">
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span className="text-gray-500 font-medium">{label}</span>
  </div>
  )
}

export default EquipmentItem
