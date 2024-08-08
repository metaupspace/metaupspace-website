"use client";
import React from "react";
import { motion } from "framer-motion";

const StepCard = ({
  step,
  index,
}: {
  step: { title: string; description: string };
  index: number;
}) => {
  const opacity = 1 - index * 0.2;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex items-centerjustify-${
        isEven ? "end" : "start"
      } py-10 px-4 rounded-lg mb-8  text-gray-${100 + index * 300} w-1/2`}
    >
      <div className="w-full">
        <h2 className={`text-xl font-bold pb-5 ${index > 2 ? "invert" : ""}`}>
          {step.title}
        </h2>
        <img src="../assets/rec.png" className={`${isEven ? "" : "pl-20"}`} />
        <h3 className={`text-lg font-bold mt-5 ${index > 2 ? "invert" : ""}`}>
          CONTRACT
        </h3>
        <p className={`mt-2 ${index > 2 ? "invert" : ""} `}>
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

export default StepCard;
