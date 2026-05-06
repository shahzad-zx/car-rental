import React from 'react'

const ContactInfoItem = ({icon : Icon, label, value}) => {
  return (
   <div className="flex items-center gap-4">
    <div className="bg-[#FFA500] p-4 rounded-full text-white flex-shrink-0">
      <Icon size={24} />
    </div>
    <div className="flex flex-col">
      <span className="text-gray-400 text-sm font-medium">{label}</span>
      <span className="text-gray-900 font-bold">{value}</span>
    </div>
  </div>
  )
}

export default ContactInfoItem
