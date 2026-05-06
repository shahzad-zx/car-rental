import React from 'react'
import {IMAGES} from '../../../assets/images'

const Logos = () => {
    const brands = [
    { name: 'Toyota', src: IMAGES.toyotaLogo },
    { name: 'Ford', src: IMAGES.fordLogo },
    { name: 'Mercedes', src: IMAGES.mercedesLogo },
    { name: 'Jeep', src: IMAGES.jeepLogo },
    { name: 'BMW', src: IMAGES.bmwLogo },
    { name: 'Audi', src: IMAGES.audiLogo },
]
  return (
    <div>
      {/* <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Container: Soft gray background with large pill rounding */}
      <div className="max-w-7xl h-[174px]  mb-20 mx-auto bg-[#F8F8F8] rounded-[40px] px-8 py-10 md:py-14 flex flex-wrap items-center justify-between gap-12 md:gap-20 lg:gap-24">
        
        {brands.map((brand, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 cursor-pointer"
          >
            {/* The Image Tag with empty src as requested */}
            <img 
              src={brand.src} 
              alt={brand.name} 
              className="h-8 md:h-12 w-auto object-contain max-w-[120px]" 
            />
          </div>
        ))}

      </div>
    {/* </section> */} */
    
    </div>
  )
}

export default Logos
