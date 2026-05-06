import React from 'react'

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
     <div className="flex flex-col items-center text-center">
    <div className="mb-4 text-gray-900">
      <Icon className="w-12 h-12" />
    </div>
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p className="text-gray-500 text-sm max-w-[250px] leading-relaxed">{description}</p>
  </div>
  )
}

export default FeatureCard

