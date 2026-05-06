export const FormInput = ({ icon: Icon, bg = "bg-gray-50", textColor = "text-gray-600" ,...props }) => (
  <div className="relative">
    <input 
      {...props}
      className={`w-full ${bg} border border-gray-100 ${textColor} py-3 px-4 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500`}
    />
    {/* {Icon && <Icon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />} */}
  </div>
);






// export const FormInput = ({
//   icon: Icon,
//   bg = "bg-gray-50",
//   textColor = "text-gray-600",
//   type,
//   ...props
// }) => (
//   <div className="relative">
//     <input
//       type={type}
//       {...props}
//       className={`w-full ${bg} ${textColor} border border-gray-100 py-3 px-4 pr-10 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 
      
//       ${type === "date" ? "appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0" : ""}
//       `}
//     />

//     {/* Custom icon (only for date) */}
//     {type === "date" && (
//       <input
//         type="date"
//         className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 cursor-pointer"
//       />
//     )}

//     {/* Optional SVG if not date */}
//     {Icon && type !== "date" && (
//       <Icon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//     )}
//   </div>
// );