import React from "react";
import { cn } from "@/lib/utils";
import GridPattern from "./magicui/grid-pattern";
import Spline from "@splinetool/react-spline"; // Import the Spline component
import { ReviewCard } from "./Marquee";
import Marquee from "./magicui/marquee";
import { reviews } from "@/lib/data";

const MainSection = () => {
  return (
    <section
      id="main-section"
      className="relative py-20 px-5 md:pl-20 bg-black text-white"
    >
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
      <div className="md:flex md:flex-row flex-col justify-between">
        {/* Right side: Text content */}
        <div className="w-full md:w-1/2 md:ml-10">
          <h1 className="text-5xl font-bold">
            Where <span className="text-gray-600"> Innovation</span>
          </h1>
          <h1 className="text-5xl font-bold">Meets Impact</h1>
          <p className="mt-6 text-md">
            Unleash your team's potential with MetaUpSpace.
          </p>
          <p className="text-md">
            Revolutionary solutions for tech, marketing, and production.
          </p>
          <div className="mt-8 flex justify-start space-x-4">
            <button className="bg-white text-black px-6 py-2 rounded-xl">
              Learn More
            </button>
            <button className="border-gray-500 px-6 py-2 rounded-xl border">
              Start Now
            </button>
          </div>
          <div className="relative bg-black flex h-[300px] w-full md:w-2/3 flex-col items-center justify-center overflow-hidden rounded-lg py-30">
            <div className="flex space-x-4 mt-2">
              <Marquee
                pauseOnHover
                // reverse={reverse}
                className="[--duration:20s] flex space-x-4"
              >
                {reviews.map((review, index) => (
                  <ReviewCard key={index} {...review} />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
        {/* Left side: 3D model */}
        <div className="w-full hidden md:flex h-full md:pr-10">
          <Spline scene="https://prod.spline.design/iu1k9Z6wjlrRef7E/scene.splinecode" />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
