// import Image from "next/image";
import { useLottie } from "lottie-react";
import resumeShortlistAnimation from "@/public/assets/lottie.json";
import onlineAssessmentAnimation from "@/public/assets/online.json";
import technicalRoundAnimation from "@/public/assets/technical.json";
import hrRoundAnimation from "@/public/assets/hr.json";
import onBoarding from "@/public/assets/onboard.json";
import GridPattern from "./magicui/grid-pattern";
import { cn } from "@/lib/utils";
const steps = [
  {
    num: "Step 1",
    title: "Resume Shortlisting",
    image: "/assets/resume-shortlist.jpeg",
    description:
      "Review and select resumes based on the job requirements and candidate qualifications to create a pool of potential candidates.",
    key: 1,
    animation: resumeShortlistAnimation,
  },
  {
    num: "Step 2",
    title: "Online Assessment",
    image: "/assets/assessment.jpeg",
    description:
      "Conduct initial evaluations through online tests to gauge candidates' technical skills and aptitude relevant to the role.",
    key: 2,
    animation: onlineAssessmentAnimation,
  },
  {
    num: "Step 3",
    title: "Technical Round",
    image: "/assets/technical-round.jpeg",
    description:
      "Assess candidates' technical expertise through in-depth interviews or coding challenges to ensure they meet the technical requirements of the position.",
    key: 3,
    animation: technicalRoundAnimation,
  },
  {
    num: "Step 4",
    title: "HR/Behavioral Round",
    image: "/assets/HR.jpeg",
    description:
      "Evaluate candidates' soft skills, cultural fit, and overall suitability for the company through interviews focused on behavioral and HR aspects.",
    key: 4,
    animation: hrRoundAnimation,
  },
  {
    num: "Step 5",
    title: "On board candidates",
    image: "/assets/onboarding.jpeg",
    description:
      "Monitor satisfaction of both the client and the placed candidate to ensure a successful match and address any issues that arise.",
    key: 5,
    animation: onBoarding,
  },
];

function LottieAnimation({ animationData }: { animationData: any }) {
  const options = {
    animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="w-44 h-44 flex justify-center items-center">{View}</div>
  );
}

export default function AlternatingProcessFlow() {
  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-5xl mx-auto relative md:px-8">
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
          )}
        />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-500 transform -translate-x-1/2 hidden md:block"></div>
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-500 md:hidden"></div>
        {steps.map((step, index) => (
          <div
            key={step.key}
            className={`relative z-10 mb-16 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            <div
              className={`bg-gray-800 rounded-lg p-6 shadow-lg max-w-xl w-full md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:mr-8" : "md:ml-8"
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gray-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
              </div>
              {/* <div className="mb-4 relative h-48 w-full">
                <Image
                  src={step.image}
                  alt={step.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </div> */}
              <div className="my-2 flex justify-center items-center">
                <LottieAnimation animationData={step.animation} />
              </div>
              <p className="text-gray-300">{step.description}</p>
            </div>
            <div
              className="hidden md:flex absolute left-0 md:left-1/2 w-6 h-6 bg-gray-600 rounded-full border-4 border-black"
              style={{
                top: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 20,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
