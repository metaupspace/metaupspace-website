"use client";
import React from "react";
import StepCard from "./StepCard";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import timelineIcon from "../public/assets/node-js.png";

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
    <section id="process" className=" py-40  bg-black text-white">
      <div className="container mx-auto relative">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Process Flow</h1>
          <p className="mt-2">
            Our Curated Baskets make your work tools to speed up your projects.
          </p>
        </div>
        <div className="relative">
          <VerticalTimeline
            layout={"1-column-right"}
            animate={false}
            lineColor={"#D7D7D7"}
          >
            {steps.map((step, index) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                key={index}
                contentStyle={{ background: "#D7D7D7" }}
                // icon={timelineIcon}
              >
                {/* <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#19191A] to-transparent pointer-events-none"></div> */}

                <h2 className="  vertical-timeline-element-title text-xl font-bold pb-5 text-white">
                  {step.num}
                </h2>
                <div className="flex justify-between gap-5">
                  <Image
                    src={step.image}
                    alt={step.title}
                    height={150}
                    width={150}
                    className=""
                  />
                  <div>
                    <h3 className="text-lg font-bold mt-5 text-black">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-black">{step.description}</p>
                  </div>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      {/* <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#19191A] to-white pointer-events-none"></div> */}
    </section>
  );
};

export default ProcessFlow;
