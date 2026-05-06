import React from "react";

const SplitSection = ({ children, reverse = false, className = "" }) => {
  return (
    <div>
      <section
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 ${className}`}
      >
        <div className={`${reverse ? "lg:order-2" : "lg:order-1"}`}>
          {Array.isArray(children) ? children[0] : null}
        </div>
        <div className={`${reverse ? "lg:order-1" : "lg:order-2"}`}>
          {Array.isArray(children) ? children[1] : null}
        </div>
      </section>
    </div>
  );
};

export default SplitSection;
