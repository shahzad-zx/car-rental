import React, { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryTest from "../Errors/ErrorBoundaryTest";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion"; 
import { Layout } from "lucide-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Loader from "../components/ui/Loader";
const Home = lazy(() => import("../pages/home/Home"));
const Vehicles = lazy(() => import("../pages/vehicles/Vehicles"));
const Details = lazy(() => import("../pages/details/Details"));
const About = lazy(() => import("../pages/about/About"));
const Contact = lazy(() => import("../pages/contact/Contact"));

const AppRoutes = () => {
  return (
    <div>
      {/* <Layout> */}
      {/* Suspense Wrapper */}

      {/* FallbackCOmponent expects component reference not JSX element */}
      <ErrorBoundary FallbackComponent={ErrorBoundaryTest} onReset={() => {}}>
        <Suspense fallback={<Loader />}>
          {/* This motion.div creates the "Reveal" effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vehicle" element={<Vehicles />} />
              <Route path="/details" element={<Details />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </motion.div>
        </Suspense>
      </ErrorBoundary>
      {/* </Layout> */}
      {/* <Home /> */}
    </div>
  );
};

export default AppRoutes;
