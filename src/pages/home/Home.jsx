// import React from "react";
// import { Car, Phone, Calendar, MapPin, Wallet } from "lucide-react";
// import { ArrowRight } from "lucide-react";
// import { IMAGES } from "../../assets/images.js";
// import { motion } from "framer-motion";
// import FeatureCard from "../../components/ui/FeatureCard";
// import Navbar from "../../layout/Navbar";
// import HeroSection from "./components/HeroSection";
// import InfoItem from "../../layout/InfoItem";
// import SplitSection from "../../layout/SplitSection";
// import CarCard from "../../layout/CarCard";
// import BannerSec from "./components/BannerSec";
// import DownloadBtn from "./components/DownloadBtn";
// import HeroBanner from "../../layout/HeroBanner";
// import Footer from "../../layout/Footer";

// const Home = () => {
//   // Animation on card
//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };
//   const CARS_DATA = [
//     {
//       id: 1,
//       name: "Mercedes",
//       type: "Sedan",
//       price: 25,
//       transmission: "Automat",
//       fuel: "PB 95",
//       ac: true,
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKLizXt1Rndi2b9JhPyJvHbGR0XxGpoebNg&s",
//     },
//     {
//       id: 2,
//       name: "Mercedes",
//       type: "Sport",
//       price: 50,
//       transmission: "Automat",
//       fuel: "PB 95",
//       ac: true,
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFlrrOAPOi6iLNnvhg6xHTjglYVx3lVCuLA&s",
//     },
//     {
//       id: 3,
//       name: "BMW",
//       type: "Sedan",
//       price: 45,
//       transmission: "Automat",
//       fuel: "PB 95",
//       ac: true,
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjaf7sPOqickxketrujTs75x5W6rKvmwQjQw&s",
//     },
//     {
//       id: 4,
//       name: "Porsche",
//       type: "SUV",
//       price: 40,
//       transmission: "Automat",
//       fuel: "PB 95",
//       ac: true,
//       image: IMAGES.porsche,
//     },
//     {
//       id: 5,
//       name: "Toyota",
//       type: "Sedan",
//       price: 35,
//       transmission: "Automat",
//       fuel: "PB 95",
//       ac: true,
//       image: IMAGES.toyota,
//     },
//     {
//       id: 6,
//       name: "Porsche",
//       type: "SUV",
//       price: 50,
//       transmission: "Automat",
//       fuel: "PB 95",
//       ac: true,
//       image: IMAGES.porsche911,
//     },
//     // ... add more car objects here
//   ];

// // Math.random() > 0.5
//   // if(Math.random() > 0.5) {
//   //   console.log("Error occured...!")
//   //   return new Error("Test Error Boundary")
//   // }
//   return (
//     <div className="min-h-screen w-full ">
//       {/* <Navbar /> */}

//       <main className="max-w-7xl mx-auto ">
//         <HeroSection />

//         <section className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20">
//           <FeatureCard
//             icon={MapPin}
//             title="Availability"
//             description="Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis."
//           />
//           <FeatureCard
//             icon={Car}
//             title="Comfort"
//             description="Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis."
//           />
//           <FeatureCard
//             icon={Wallet}
//             title="Savings"
//             description="Pretium convallis id diam sed commodo vestibulum lobortis volutpat."
//           />
//         </section>

//         {/* <h1>Hero Name</h1> */}

//         {/* Section 2: Info Section (Image Left, Text Right) */}
//         <SplitSection className="">
//           {/* Content for Left Side (The Image) */}
//           <div className="relative group">
//             <div className="overflow-hidden rounded-[40px] shadow-xl">
//               <img
//                 src="/your-car-image.jpg"
//                 alt="Car interior"
//                 className="w-full h-[500px] object-cover"
//               />
//             </div>
//           </div>

//           {/* Content for Right Side (The List) */}
//           <div className="pl-0 lg:pl-10">
//             <InfoItem
//               number="1"
//               title="Erat at semper"
//               description="Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat."
//             />
//             <InfoItem
//               number="2"
//               title="Urna nec vivamus risus duis arcu"
//               description="Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida."
//             />
//             <InfoItem
//               number="3"
//               title="Lobortis euismod imperdiet tempus"
//               description="Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc."
//             />
//             <InfoItem
//               number="4"
//               title="Cras nulla aliquet nam eleifend amet et"
//               description="Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida."
//             />
//           </div>
//         </SplitSection>

//         {/* CarCard Section */}
//         <section>
//           <div className="w-full  mx-auto  py-12">
//             {/* Section Header */}
//             <div className="flex justify-between items-end mb-10">
//               <h2 className="text-4xl font-bold text-gray-900 leading-tight">
//                 Choose the car that <br /> suits you
//               </h2>
//               <button className="flex items-center gap-2 text-gray-900 font-bold hover:text-indigo-600 transition">
//                 View All <ArrowRight size={20} />
//               </button>
//             </div>

//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
//             >
//               {CARS_DATA.map((car) => (
//                 <CarCard key={car.id} car={car} />
//               ))}
//             </motion.div>
//           </div>
//         </section>
//         {/* Banner Section */}
//         <BannerSec />

//         {/* Download Section Wrapper */}
//         <SplitSection reverse={true} className="items-center py-24">
//           {/* Left Column: The Overlapping Phone Mockup */}
//           <div className="relative w-full h-[500px] flex items-center justify-center">
//             {/* Background Phone (The one in the back) */}
//             <div className="relative z-0 translate-x-12 translate-y-4 rotate-3 opacity-90">
//               <img
//                 src={IMAGES.mobile}
//                 alt="Mobile app preview"
//                 className="h-[480px] w-auto drop-shadow-2xl"
//               />
//             </div>

//             {/* Foreground Phone */}
//             <div className="absolute z-10 -translate-x-12 -rotate-3">
//               <img
//                 src={IMAGES.mobile}
//                 alt="Mobile app main preview"
//                 className="h-[520px] w-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
//               />
//             </div>

//             {/* Decorative Background Glow  */}
//             <div className="absolute -z-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
//           </div>

//           {/* Right Column: Text & Buttons */}
//           <div className="flex flex-col gap-8 pl-14">
//             <div className="space-y-6">
//               <h2 className="text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
//                 Download <br /> mobile app
//               </h2>
//               <p className=" text-gray-500 text-lg leading-relaxed max-w-[480px]">
//                 Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor
//                 cursus turpis nibh placerat massa. Fermentum urna ut at et in.
//                 Turpis aliquet cras hendrerit enim condimentum.
//               </p>
//             </div>

//             {/* Button Row */}
//             <div className="flex flex-wrap gap-4 pt-2">
//               <DownloadBtn
//                 image={IMAGES.appleLogo}
//                 text="Download on the"
//                 app="App Store"
//               />
//               <DownloadBtn
//                 image={IMAGES.playStoreIcon}
//                 text="Get it on"
//                 app="Google Play"
//               />
//             </div>
//           </div>
//         </SplitSection>

//         {/* HeroBanner Section */}
//         <HeroBanner
//           title="Enjoy every mile with adorable companionship."
//           description="Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat"
//           photo={IMAGES.heroBannerCar}
//         ></HeroBanner>

//         {/* <Footer /> */}
//       </main>
//     </div>
//   );
// };

// export default Home;






// complete new home.jsx



import React, { useRef } from "react";
import { Car, Phone, Calendar, MapPin, Wallet, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";

// Your existing imports
import { IMAGES } from "../../assets/images.js";
import FeatureCard from "../../components/ui/FeatureCard";
import HeroSection from "./components/HeroSection";
import InfoItem from "../../layout/InfoItem";
import SplitSection from "../../layout/SplitSection";
import BannerSec from "./components/BannerSec";
import DownloadBtn from "./components/DownloadBtn";
import HeroBanner from "../../layout/HeroBanner";
import { CardStack } from "../../components/ui/CardStack.jsx";

// --- STICKY CARD COMPONENT ---

// const CarStackCard = ({ i, name, type, price, image, progress, range, targetScale }) => {
//   const container = useRef(null);
//   const scale = useTransform(progress, range, [1, targetScale]);

//   return (
//     <div ref={container} className="sticky top-0 h-screen flex items-center justify-center">
//       <motion.div
//         style={{
//           scale,
//           top: `calc(10vh + ${i * 25}px)`, // Adjusts the "peek-a-boo" offset of stacked cards
//         }}
//         className="relative h-[450px] w-full max-w-[800px] overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100 flex flex-col md:flex-row"
//       >
//         <div className="w-full md:w-1/2 h-64 md:h-full">
//           <img src={image} alt={name} className="h-full w-full object-cover" />
//         </div>
//         <div className="p-8 flex flex-col justify-center flex-1">
//           <span className="text-indigo-600 font-semibold uppercase tracking-wider text-sm">{type}</span>
//           <h3 className="text-4xl font-bold text-gray-900 mt-2">{name}</h3>
//           <p className="text-gray-500 mt-4">Starting from <span className="text-2xl font-bold text-gray-900">${price}/day</span></p>
//           <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-full font-bold w-fit hover:bg-indigo-700 transition">
//             Rent This Car
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

const Home = () => {
  const CARS_DATA = [
    { id: 1, name: "Mercedes S-Class", type: "Sedan", price: 25, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKLizXt1Rndi2b9JhPyJvHbGR0XxGpoebNg&s" },
    { id: 2, name: "Mercedes AMG", type: "Sport", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFlrrOAPOi6iLNnvhg6xHTjglYVx3lVCuLA&s" },
    { id: 3, name: "BMW M5", type: "Sedan", price: 45, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjaf7sPOqickxketrujTs75x5W6rKvmwQjQw&s" },
    { id: 4, name: "Porsche Cayenne", type: "SUV", price: 40, image: IMAGES.porsche },
  ];

  const stackContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stackContainer,
    offset: ["start start", "end end"],
  });

  return (
    // Wrap the whole app in Lenis for that high-end smooth feel
    <ReactLenis root>
      <div className="min-h-screen w-full bg-slate-50">
        <main className="w-full  md:max-w-7xl mx-auto px-4">
          <HeroSection />

          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20">
            <FeatureCard icon={MapPin} title="Availability" description="Available 24/7 in your city." />
            <FeatureCard icon={Car} title="Comfort" description="Premium interiors for every ride." />
            <FeatureCard icon={Wallet} title="Savings" description="Best prices guaranteed." />
          </section>

          {/* SPLIT SECTION: Corrected the Image Path fix */}
          <SplitSection className="py-20">
             <div className="overflow-hidden rounded-[40px] shadow-xl">
                <img src={IMAGES.porsche911} alt="Car interior" className="w-full h-[500px] object-cover" />
             </div>
             <div className="pl-0 lg:pl-10">
                <InfoItem number="1" title="Easy Booking" description="Book your car in less than 60 seconds." />
                <InfoItem number="2" title="Flexible Plans" description="Daily, weekly, or monthly rentals." />
             </div>
          </SplitSection>

          {/* --- NEW STICKY STACK SECTION --- */}
          {/* <section ref={stackContainer} className="relative pb-[10vh]">
            <div className=" text-center">
              <h2 className="text-5xl font-extrabold text-gray-900">Featured Fleet</h2>
              <p className="text-gray-500 mt-4">Scroll down to explore our premium collection</p>
            </div>
            
            {CARS_DATA.map((car, i) => {
              const targetScale = 1 - ((CARS_DATA.length - i) * 0.05);
              return (
                <CarStackCard
                  key={car.id}
                  i={i}
                  {...car}
                  progress={scrollYProgress}
                  range={[i * (1 / CARS_DATA.length), 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </section> */}

          <section className="pb-20">
             <div className=" text-center mb-[-75px]">
              <h2 className="text-5xl font-extrabold text-gray-900">Featured Fleet</h2>
              <p className="text-gray-500 mt-4">Scroll down to explore our premium collection</p>
            </div>
       <CardStack items={CARS_DATA} />
    </section>

          <BannerSec />
          
          <SplitSection reverse={true} className="items-center py-24">
             {/* ... Download Section Content ... */}
          </SplitSection>

          <HeroBanner 
            title="Enjoy every mile with adorable companionship." 
            photo={IMAGES.heroBannerCar} 
          />
        </main>
      </div>
    </ReactLenis>
  );
};

export default Home;