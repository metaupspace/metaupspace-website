import React from "react";
import StepCard from "./StepCard";

const steps = [
  {
    num: "Step 1",
    title: "Resume Shortlisting",
    image: "/assets/resume-shortlist.jpeg",
    description:
      "Review and select resumes based on the job requirements and candidate qualifications to create a pool of potential candidates.",
    key: 1,
  },
  {
    num: "Step 2",
    title: "Online Assessment",
    image: "/assets/assessment.jpeg",
    description:
      "Conduct initial evaluations through online tests to gauge candidates’ technical skills and aptitude relevant to the role.",
    key: 2,
  },
  {
    num: "Step 3",
    title: "Technical Round",
    image: "/assets/technical-round.jpeg",
    description:
      "Assess candidates' technical expertise through in-depth interviews or coding challenges to ensure they meet the technical requirements of the position.",
    key: 3,
  },
  {
    num: "Step 4",
    title: "HR/Behavioral Round",
    image: "/assets/HR.jpeg",
    description:
      "Evaluate candidates’ soft skills, cultural fit, and overall suitability for the company through interviews focused on behavioral and HR aspects.",
    key: 4,
  },
  {
    num: "Step 5",
    title: "On board candidates",
    image: "/assets/onboarding.jpeg",
    description:
      "Monitor satisfaction of both the client and the placed candidate to ensure a successful match and address any issues that arise.",
    key: 5,
  },
];

const ProcessFlow = () => {
  return (
    <section
      id="process"
      className="py-20 pt-40 bg-gradient-to-b from-black via-black to-white text-gray-100"
    >
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
