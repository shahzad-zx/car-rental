import React from "react";
import { Car, Phone, Calendar, MapPin, Wallet } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "../../assets/images.js";
import FeatureCard from "../../components/ui/FeatureCard";
import Navbar from "../../layout/Navbar";
import HeroSection from "./components/HeroSection";
import InfoItem from "../../layout/InfoItem";
import SplitSection from "../../layout/SplitSection";
import CarCard from "../../layout/CarCard";
import BannerSec from "./components/BannerSec";
import DownloadBtn from "./components/DownloadBtn";
import HeroBanner from "../../layout/HeroBanner";
import Footer from "../../layout/Footer";

const Home = () => {
  const CARS_DATA = [
    {
      id: 1,
      name: "Mercedes",
      type: "Sedan",
      price: 25,
      transmission: "Automat",
      fuel: "PB 95",
      ac: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKLizXt1Rndi2b9JhPyJvHbGR0XxGpoebNg&s",
    },
    {
      id: 2,
      name: "Mercedes",
      type: "Sport",
      price: 50,
      transmission: "Automat",
      fuel: "PB 95",
      ac: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFlrrOAPOi6iLNnvhg6xHTjglYVx3lVCuLA&s",
    },
    {
      id: 3,
      name: "BMW",
      type: "Sedan",
      price: 45,
      transmission: "Automat",
      fuel: "PB 95",
      ac: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjaf7sPOqickxketrujTs75x5W6rKvmwQjQw&s",
    },
    {
      id: 4,
      name: "Porsche",
      type: "SUV",
      price: 40,
      transmission: "Automat",
      fuel: "PB 95",
      ac: true,
      image: IMAGES.porsche,
    },
    {
      id: 5,
      name: "Toyota",
      type: "Sedan",
      price: 35,
      transmission: "Automat",
      fuel: "PB 95",
      ac: true,
      image: IMAGES.toyota,
    },
    {
      id: 6,
      name: "Porsche",
      type: "SUV",
      price: 50,
      transmission: "Automat",
      fuel: "PB 95",
      ac: true,
      image: IMAGES.porsche911,
    },
    // ... add more car objects here
  ];

  return (
    <div className="min-h-screen w-full ">
      {/* <Navbar /> */}

      <main className="max-w-7xl mx-auto ">
        <HeroSection />

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20">
          <FeatureCard
            icon={MapPin}
            title="Availability"
            description="Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis."
          />
          <FeatureCard
            icon={Car}
            title="Comfort"
            description="Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis."
          />
          <FeatureCard
            icon={Wallet}
            title="Savings"
            description="Pretium convallis id diam sed commodo vestibulum lobortis volutpat."
          />
        </section>

        {/* <h1>Hero Name</h1> */}

        {/* Section 2: Info Section (Image Left, Text Right) */}
        <SplitSection className="">
          {/* Content for Left Side (The Image) */}
          <div className="relative group">
            <div className="overflow-hidden rounded-[40px] shadow-xl">
              <img
                src="/your-car-image.jpg"
                alt="Car interior"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Content for Right Side (The List) */}
          <div className="pl-0 lg:pl-10">
            <InfoItem
              number="1"
              title="Erat at semper"
              description="Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat."
            />
            <InfoItem
              number="2"
              title="Urna nec vivamus risus duis arcu"
              description="Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida."
            />
            <InfoItem
              number="3"
              title="Lobortis euismod imperdiet tempus"
              description="Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc."
            />
            <InfoItem
              number="4"
              title="Cras nulla aliquet nam eleifend amet et"
              description="Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida."
            />
          </div>
        </SplitSection>

        {/* CarCard Section */}
        <section>
          <div className="w-full  mx-auto  py-12">
            {/* Section Header */}
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Choose the car that <br /> suits you
              </h2>
              <button className="flex items-center gap-2 text-gray-900 font-bold hover:text-indigo-600 transition">
                View All <ArrowRight size={20} />
              </button>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {CARS_DATA.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>
        {/* Banner Section */}
        <BannerSec />

       

        {/* Download Section Wrapper */}
        <SplitSection reverse={true} className="items-center py-24">
          {/* Left Column: The Overlapping Phone Mockup */}
          <div className="relative w-full h-[500px] flex items-center justify-center">
            {/* Background Phone (The one in the back) */}
            <div className="relative z-0 translate-x-12 translate-y-4 rotate-3 opacity-90">
              <img
                src={IMAGES.mobile}
                alt="Mobile app preview"
                className="h-[480px] w-auto drop-shadow-2xl"
              />
            </div>

            {/* Foreground Phone */}
            <div className="absolute z-10 -translate-x-12 -rotate-3">
              <img
                src={IMAGES.mobile}
                alt="Mobile app main preview"
                className="h-[520px] w-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
              />
            </div>

            {/* Decorative Background Glow  */}
            <div className="absolute -z-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
          </div>

          {/* Right Column: Text & Buttons */}
          <div className="flex flex-col gap-8 pl-14">
            <div className="space-y-6">
              <h2 className="text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Download <br /> mobile app
              </h2>
              <p className=" text-gray-500 text-lg leading-relaxed max-w-[480px]">
                Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor
                cursus turpis nibh placerat massa. Fermentum urna ut at et in.
                Turpis aliquet cras hendrerit enim condimentum.
              </p>
            </div>

            {/* Button Row */}
            <div className="flex flex-wrap gap-4 pt-2">
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
        </SplitSection>


        {/* HeroBanner Section */}
        <HeroBanner title="Enjoy every mile with adorable companionship." description="Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat" photo={IMAGES.heroBannerCar}  ></HeroBanner>


        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default Home;
