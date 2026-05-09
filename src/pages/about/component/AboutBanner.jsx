import React from 'react';
import DownloadBtn from '../../home/components/DownloadBtn';
import { IMAGES } from "../../../assets/images";

const AboutBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 ">
      {/* Container with brand purple background */}
      <div className="bg-[#5842E3] rounded-[40px] relative min-h-[400px] flex flex-col lg:flex-row items-center overflow-visible relative">
        
        {/* 1. Decorative Tire Track Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/tire-pattern.png')] bg-repeat-x scale-110 rotate-[-5deg]"></div>
        </div>

        {/* 2. Left Side: Overlapping Mobile Image */}
        <div className=" w-full lg:w-2/5 flex hidden md:block justify-center lg:justify-end lg:pr-12 ">
          <div className="items-start lg:absolute   lg:-bottom-1 lg:left-1 w-[280px] md:w-full z-10">
            <img 
              src={IMAGES.mobile} 
              alt="App Preview" 
            //   className="w-full h-auto drop-shadow-2xl"
            className='w-auto h-[640px]  drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'
            />
          </div>
        </div>

        {/* 3. Right Side: Text Content */}
        <div className="w-full lg:w-3/5 p-12 lg:p-20 text-white z-10">
          <div className="space-y-6">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase opacity-80">
              DOWNLOAD OUR APP
            </h3>
            
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Download our app
            </h2>
            
            <p className="text-indigo-100 text-lg leading-relaxed max-w-xl">
              Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas 
              semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in 
              vulputate. Nulla nam eget urna fusce vulputate at risus
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <DownloadBtn
                image={IMAGES.appleLogo}
                text="Download on the"
                app="App Store"
              />
              <DownloadBtn
                image={IMAGES.playStoreIcon}
                text="Get it on"
                app="Google Play"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutBanner;