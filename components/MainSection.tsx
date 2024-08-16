import React from "react";
import { cn } from "@/lib/utils";
import GridPattern from "./magicui/grid-pattern";
import Spline from "@splinetool/react-spline"; // Import the Spline component
import { ReviewCard } from "./Marquee";
import Marquee from "./magicui/marquee";
import { reviews } from "@/lib/data";
import Image from "next/image";
import tagline from "../public/assets/tagline.png";
import localFont from "next/font/local";

const myFont = localFont({ src: "../public/fonts/naston-regular.woff" });

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
            <span className={myFont.className}>MetaUpSpace :</span>
          </h1>
          <h1 className="text-4xl font-bold">
            <span className={myFont.className}>Thinkpad of Innovation</span>
          </h1>
          <p className="mt-6 text-md">
            Unleash your team&apos;s potential with MetaUpSpace.
          </p>
          <p className="text-md">
            Revolutionary solutions for IT Staffing and Development.
          </p>
          <div className="mt-8 flex justify-start space-x-4">
            <button className="bg-white text-black px-6 py-2 rounded-xl">
              <a href="#it-staffing">Learn More</a>
            </button>
            <button className="border-gray-500 px-6 py-2 rounded-xl border">
              <a href="https://wa.me/918689829680" target="_blank">
                Connect with us
              </a>
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
        <div className="h-full hidden md:flex ">
          <Spline scene="https://prod.spline.design/y4bSMaUzxbPu1MZF/scene.splinecode" />
          {/* <Spline scene="https://prod.spline.design/iu1k9Z6wjlrRef7E/scene.splinecode" /> */}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
