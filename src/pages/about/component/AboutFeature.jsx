import React from 'react'

const AboutFeature = ({title, description}) => {
  return (
    <div className='space-y-4'>
        {/* title */}
        <h3 className='text-2xl font-bold text-gray-900 leading-tight'>
            {title}

        </h3>
        {/* description */}
        <p className='text-sm text-gray-500 leading-relaxed max-w-sm'>{description}</p>
      
    </div>
  )
}

export default AboutFeature
