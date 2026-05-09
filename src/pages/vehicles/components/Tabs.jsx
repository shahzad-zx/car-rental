// import React from "react";
// import {IMAGES} from '../../../assets/images.js'

// const Tabs = ({
//   children,
//   image,
//   //   icon: Icon, // Accepts a Lucide icon component
//   variant = "primary",
//   className = "",
//   iconPosition = "left",
//   ...props
// }) => {
//   const baseStyles =
//     "flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-full transition-all duration-200 active:scale-95 whitespace-nowrap";

//   const variants = {
//     ghost: "bg-gray-50 text-gray-900 hover:bg-gray-200",
//     primary: "bg-[#5842E3] text-white hover:bg-indigo-700",
//     secondary: "bg-[#FF9F1C] text-white hover:bg-orange-600",
//     outline: "border-2 border-gray-100 text-gray-900 hover:bg-gray-50",
//   };
//   return <div>
//     <button 
//       className={` ${baseStyles} ${variants[variant]} ${className}`}
//       {...props}
//     >
//       {/* Render Icon on Left if provided */}
//       {/* {Icon && iconPosition === 'left' && <Icon size={20} strokeWidth={2.5} />} */}
//       {image && <img src={image} alt="asd" />}
//       <span>{children}</span>
      
//       {/* Render Icon on Right if provided */}
//       {/* {Icon && iconPosition === 'right' && <Icon size={20} strokeWidth={2.5} />} */}
//     </button>
//   </div>;
// };

// export default Tabs;





// The new Tabs.jsx

import React from "react";

const Tabs = ({
  children,
  image,
  variant = "primary",
  className = "",
  iconPosition = "left",
  ...props
}) => {
  // REVISIONS:
  // 1. Added 'text-sm md:text-base' for fluid font size.
  // 2. Changed padding to 'py-2 px-4 md:py-3 md:px-6' for smaller mobile buttons.
  // 3. Kept 'whitespace-nowrap' but added 'w-full md:w-auto' capability via className.
  const baseStyles =
    "flex items-center justify-center gap-2 font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition-all duration-200 active:scale-95 text-sm md:text-base whitespace-nowrap";

  const variants = {
    ghost: "bg-gray-50 text-gray-900 hover:bg-gray-200",
    primary: "bg-[#5842E3] text-white hover:bg-indigo-700",
    secondary: "bg-[#FF9F1C] text-white hover:bg-orange-600",
    outline: "border-2 border-gray-100 text-gray-900 hover:bg-gray-50",
  };

  return (
    /* 
       Added w-full capability: On mobile, tabs often look better 
       if they stretch to fill their container. 
    */
    <div className="inline-block w-full md:w-auto">
      <button 
        className={`${baseStyles} ${variants[variant]} ${className} w-full`}
        {...props}
      >
        {image && (
          <img 
            src={image} 
            alt="" 
            className="w-5 h-5 md:w-6 md:h-6 object-contain" 
          />
        )}
        <span>{children}</span>
      </button>
    </div>
  );
};

export default Tabs;