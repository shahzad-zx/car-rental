import React from 'react'
import { motion } from 'framer-motion';

const Loader = () => {
    // Animation variants for the container exit
  const containerVariants = {
    exit: {
      y: "-100%",
      transition: { 
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1], 
        delay: 0.2 
      }
    }
  };

  // Animation for the central logo/icon
  const iconVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeInOut",
      }
    }
  };
  return (
   <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated SVG Logo */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            variants={iconVariants}
            initial="initial"
            animate="animate"
          />
        </svg>

        {/* Loading Text with Staggered Letters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.4em] font-light">
            Loading Experience
          </span>
          
          {/* Progress Bar background */}
          <div className="h-[1px] w-32 bg-white/20 mt-2 overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full w-full bg-white"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loader
