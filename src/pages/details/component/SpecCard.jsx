import React from 'react'

const SpecCard = ({ image, label, value }) => {
  return (
    <div className="w-full bg-[#FAFAFA] rounded-[20px] p-6 flex flex-col gap-2">
    <div className="text-gray-900 mb-2">
      {image && <img src={image} alt="" className="w-6 h-6" />}
    </div>
    <p className="font-bold text-gray-900">{label}</p>
    <p className="text-gray-500 text-sm">{value}</p>
  </div>
  )
}

export default SpecCard
