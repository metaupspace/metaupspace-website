import React from "react";
import StepCard from "./StepCard";

const steps = [
  {
    title: "Step 1",
    description:
      "We staff professionals on a short-term contract and will help you find candidates fit for your hiring needs.",
    key: 1,
  },
  {
    title: "Step 2",
    description:
      "We staff professionals on a short-term contract and will help you find candidates fit for your hiring needs.",
    key: 2,
  },
  {
    title: "Step 3",
    description:
      "We staff professionals on a short-term contract and will help you find candidates fit for your hiring needs.",
    key: 3,
  },
  {
    title: "Step 4",
    description:
      "We staff professionals on a short-term contract and will help you find candidates fit for your hiring needs.",
    key: 4,
  },
  {
    title: "Step 5",
    description:
      "We staff professionals on a short-term contract and will help you find candidates fit for your hiring needs.",
    key: 5,
  },
];

const ProcessFlow = () => {
  return (
    <section className="py-20 pt-40 bg-gradient-to-b from-black via-black to-white text-gray-100">
      <div className="container mx-auto relative">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Process Flow</h1>
          <p className="mt-2">
            Our Curated Baskets make your work tools to speed up your projects.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-px bg-gray-300 h-full"></div>
          </div>
          {steps.map((step, index) => (
            <div
              key={step.key}
              className={`flex ${
                index % 2 === 0
                  ? "justify-end text-left"
                  : "justify-start text-right"
              }`}
            >
              <StepCard step={step} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
