export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles = "font-bold transition-all active:scale-95 shadow-md";
  const variants = {
    // primary: "bg-orange-500 hover:bg-orange-600 text-white py-3 px-10 rounded-xl",
    // full: "w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl mt-4",

    primary: "bg-[#5937E0] text-white py-3 px-10 rounded-xl",
    full: "w-full text-white py-4 rounded-xl mt-4",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
