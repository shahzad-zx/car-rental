import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import { Layout } from 'lucide-react'
import Vehicles from '../pages/vehicles/Vehicles'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Details from '../pages/details/Details'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'

const AppRoutes = () => {
  return (
    <div>
       {/* <Layout> */}
       <Navbar />
        <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/vehicle' element={<Vehicles />} />
             <Route path='/details' element={<Details />} />
             <Route path='/about' element={<About />} />
             <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
       {/* </Layout> */}
     {/* <Home /> */}
    </div>
  )
}

export default AppRoutes
