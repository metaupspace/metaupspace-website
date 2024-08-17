"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const StepCard = ({
  step,
  index,
}: {
  step: { num: string; title: string; image: string; description: string };
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
      } py-10 px-1 md:px-4 rounded-lg mb-8  text-white w-1/2`}
    >
      <div className="w-full">
        <h2 className={`text-xl font-bold pb-5 ${index > 2 ? "invert" : ""}`}>
          {step.num}
        </h2>
        <Image
          src={step.image}
          alt={step.title}
          height={100}
          width={100}
          className={`${isEven ? "" : "md:ml-20"} h-2/5 md:h-3/5`}
        />
        <h3 className={`text-lg font-bold mt-5 ${index > 2 ? "invert" : ""}`}>
          {step.title}
        </h3>
        <p className={`mt-2 ${index > 2 ? "invert" : ""} `}>
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

export default StepCard;
