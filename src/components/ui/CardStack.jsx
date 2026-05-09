import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const CardStack = ({ items }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative w-full">
      {items.map((item, i) => {
        // Adjusts the scale so background cards look deeper
        const targetScale = 1 - (items.length - i) * 0.05;
        return (
          <StickyCard
            key={item.id || i}
            i={i}
            {...item}
            progress={scrollYProgress}
            range={[i * (1 / items.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

const StickyCard = ({ i, name, image, type, price, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 h-screen flex items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(10vh + ${i * 20}px)`, // The 'stacking' offset
        }}
        className="relative h-[450px] w-full max-w-5xl bg-white rounded-[32px] shadow-2xl border border-slate-100 overflow-hidden flex"
      >
        <div className="w-1/2 h-full">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <span className="text-indigo-600 font-bold text-sm uppercase">{type}</span>
          <h3 className="text-4xl font-bold text-slate-900 mt-2">{name}</h3>
          <p className="text-slate-500 mt-4 mb-8">Premium rental experience.</p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-2xl font-bold">${price}/day</span>
            <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-medium">View Details</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};