// import React from "react";
// import AboutFeature from "./component/AboutFeature";
// // import IMAGES from '../../assets/images.js'
// import { IMAGES } from "../../assets/images";
// import StatsBar from "./component/StatsBar";
// import SplitSection from "../../layout/SplitSection";
// import Unforgatable from "./component/Unforgatable";
// import AboutBanner from "./component/AboutBanner";
// import Faq from "./component/Faq";
// import HeroBanner from "../../layout/HeroBanner";
// // import { url } from "zod";
// const About = () => {
//   const features = [
//     {
//       title: "Variety Brands",
//       description:
//         "Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio",
//     },
//     {
//       title: "Awesome Suport",
//       description:
//         "Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit",
//     },
//     {
//       title: "Maximum Freedom",
//       description:
//         "Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in",
//     },
//     {
//       title: "Flexibility On The Go",
//       description:
//         "Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis. faucibus rhoncus. Iaculis dignissim aenean pellentesque nisl",
//     },
//   ];
//   return (
//     <>
//       <section className="max-w-7xl mx-auto px-6 py-20">
//         <div className="text-center mb-24 space-y-4">
//           <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight">
//             About Us
//           </h1>
//           <nav className="text-gray-400 font-medium">
//             <span>Home</span>
//             <span className="mx-2">/</span>
//             <span className="text-gray-600">About Us</span>
//           </nav>
//         </div>

//         {/* Main Content  */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
//           {/* Left Headline */}
//           <div className="lg:pr-8">
//             <h2 className="text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
//               Where every drive feels extraordinary
//             </h2>
//           </div>

//           <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
//             {features.map((feature, index) => (
//               <AboutFeature
//                 key={index}
//                 title={feature.title}
//                 description={feature.description}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="w-full flex justify-center items-center">
//         <div className="relative w-full max-w-7xl">
//           {/* About Image */}
//           <img
//             src={IMAGES.aboutImg}
//             alt=""
//             className="w-full h-auto rounded-2xl shadow-xl object-cover"
//           />

//           {/* Play Button  */}
//           <img
//             src={IMAGES.playBtn}
//             alt=""
//             className="absolute top-1/2 left-1/2 w-16 h-16 
//                  -translate-x-1/2 -translate-y-1/2 
//                  z-10 cursor-pointer hover:scale-110 transition duration-300"
//           />
//         </div>
//       </div>

//       <StatsBar />

//       <Unforgatable />
//       <div className="mbs-16"></div>
//       <AboutBanner />
//       <Faq />

//       {/* HeroBanner Section in global component */}
//       <HeroBanner title="Looking for a car? +537 547-6401" description="Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in..." photo={IMAGES.lookingCar} />
//     </>
//   );
// };

// export default About;


















// ================================

import React from "react";
import AboutFeature from "./component/AboutFeature";
import { IMAGES } from "../../assets/images";
import StatsBar from "./component/StatsBar";
import Unforgatable from "./component/Unforgatable";
import AboutBanner from "./component/AboutBanner";
import Faq from "./component/Faq";
import HeroBanner from "../../layout/HeroBanner";

const About = () => {
  const features = [
    { title: "Variety Brands", description: "Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio" },
    { title: "Awesome Support", description: "Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit" },
    { title: "Maximum Freedom", description: "Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in" },
    { title: "Flexibility On The Go", description: "Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis. faucibus rhoncus." },
  ];

  return (
    <div className="overflow-x-hidden"> {/* Prevents horizontal scroll on small devices */}
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-24 space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            About Us
          </h1>
          <nav className="text-gray-400 font-medium text-sm sm:text-base">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="text-gray-600">About Us</span>
          </nav>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          <div className="lg:pr-8 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Where every drive feels extraordinary
            </h2>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-16">
            {features.map((feature, index) => (
              <AboutFeature
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Video/Image Container */}
      <div className="w-full px-4 sm:px-6">
        <div className="relative w-full max-w-7xl mx-auto">
          <img
            src={IMAGES.aboutImg}
            alt="About"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto rounded-2xl shadow-xl object-cover"
          />
          <img
            src={IMAGES.playBtn}
            alt="Play"
            className="absolute top-1/2 left-1/2 w-12 h-12 md:w-16 md:h-16 
                 -translate-x-1/2 -translate-y-1/2 
                 z-10 cursor-pointer hover:scale-110 transition duration-300"
          />
        </div>
      </div>

      <StatsBar />
      
      <Unforgatable />

      {/* AboutBanner usually needs to be full width */}
      <div className="my-16 md:my-24">
        <AboutBanner />
      </div>

      <Faq />

      <HeroBanner 
        title="Looking for a car? +537 547-6401" 
        description="Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in..." 
        photo={IMAGES.lookingCar} 
      />
    </div>
  );
};

export default About;