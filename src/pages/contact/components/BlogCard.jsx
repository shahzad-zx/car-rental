import React from 'react'
import { IMAGES } from '../../../assets/images'
const BlogCard = ({ image, title, category, date }) => {
  return (
   <div className="flex flex-col group cursor-pointer">
      <div className="rounded-[30px] overflow-hidden mb-6 aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      
      {/* Content  */}
      <div className="ml-4 space-y-2">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#5842E3] transition-colors">
          {title}
        </h3>
        <div className="flex items-center text-gray-400 text-sm font-medium">
          <span>{category}</span>
          <span className="mx-2">/</span>
          <span>{date}</span>
        </div>
      </div>
    </div>


 
  )
}

export default BlogCard
