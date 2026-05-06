import React from 'react'
import { FormSelect } from '../../components/ui/FormSelect'
import { FormInput } from '../../components/ui/FormInput'
import { Calendar, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import ContactInfoItem from './components/ContactInfoItem'
import { IMAGES } from '../../assets/images'
import BlogCard from './components/BlogCard'
import Logos from '../vehicles/components/Logos'

const Contact = () => {
    const posts = [
    {
      image: IMAGES.snowCarPic ,
      title: "How To Choose The Right Car",
      category: "News",
      date: "12 April 2024"
    },
    {
      image: IMAGES.desertCarPic ,
      title: "Which plan is right for me?",
      category: "News",
      date: "12 April 2024"
    },
    {
      image: IMAGES.forestCarPic,
      title: "Enjoy Speed, Choice & Total Control",
      category: "News",
      date: "12 April 2024"
    }
  ];
  return (
    <>
   <section className="max-w-7xl mx-auto px-6 py-16">
      {/* 1. Breadcrumb Header */}
      <div className="text-center mb-16 space-y-2">
        <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight">
          Contact Us
        </h1>
        <nav className="text-gray-400 font-medium">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Contact Us</span>
        </nav>
      </div>

      {/* 2. Main Content Grid (Form and Image) */}
      <div className="flex flex-col lg:flex-row gap-8 mb-20">
        
        {/* Your Custom Booking Form */}
        <div className="lg:w-[400px] bg-[#5937E0] rounded-[40px] p-10 shadow-2xl z-10 w-full">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Book your car</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <FormSelect 
              placeholder="Car type" 
              options={["SUV", "Sedan", "Luxury"]} 
              bg="bg-[#694BE3]" 
              textColor='text-white' 
            />
            <FormSelect 
              placeholder="Place of rental" 
              options={["Airport", "City Center"]} 
              bg="bg-[#694BE3]" 
              textColor='text-white' 
            />
            <FormSelect 
              placeholder="Place of return" 
              options={["Airport", "City Center"]} 
              bg="bg-[#694BE3]" 
              textColor='text-white' 
            />
            <FormInput 
              type="date" 
              placeholder="Rental date" 
              bg="bg-[#694BE3]" 
              textColor='text-white' 
            />
            <FormInput 
              type="date" 
              placeholder="Return date" 
              bg="bg-[#694BE3]" 
              textColor='text-white' 
            />
            <Button variant="full" className='bg-[#FFA500] hover:bg-orange-600 cursor-pointer py-4 rounded-xl font-bold mt-4'>
              Book now
            </Button>
          </form>
        </div>

        {/* Hero Image Section */}
        <div className="flex-1">
          <div className="rounded-[40px] overflow-hidden h-full">
            <img 
              src={IMAGES.roadCar} 
              alt="Car interior" 
              className="w-full h-full object-cover min-h-[450px]"
            />
          </div>
        </div>
      </div>

      {/* 3. Contact Info Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-gray-100">
        <ContactInfoItem 
          icon={MapPin} 
          label="Address" 
          value="Oxford Ave. Cary, NC 27511" 
        />
        <ContactInfoItem 
          icon={Mail} 
          label="Email" 
          value="nwiger@yahoo.com" 
        />
        <ContactInfoItem 
          icon={Phone} 
          label="Phone" 
          value="+537 547-6401" 
        />
        <ContactInfoItem 
          icon={Clock} 
          label="Opening hours" 
          value="Sun-Mon: 10am - 10pm" 
        />
      </div>
    </section>

     {/* // blog section  */}
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 tracking-tight">
        Latest blog posts & news
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </section>
 <Logos />
   </>
  )
}

export default Contact
