
import React from 'react'

const DownloadBtn = ({ image, text, app }) => {
  return (
    <button className='flex items-center bg-black text-white px-4 py-2 rounded-xl gap-3 transition-transform hover:scale-105 active:scale-95 border border-white/10'>
      {/* icon: scaled for better visibility */}
      <div className='flex-shrink-0'>
        <img src={image} alt="" className="w-8 h-8 object-contain" />
      </div>
      
      {/* text: precisely aligned typography */}
      <div className='text-left leading-tight'>
        <p className='text-[10px] uppercase font-medium tracking-wide opacity-80'>{text}</p>
        <h3 className='text-[18px] font-bold'>{app}</h3>
      </div>
    </button>
  )
}

export default DownloadBtn