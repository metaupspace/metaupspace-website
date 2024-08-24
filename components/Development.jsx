import React from "react";
import Projects from "./sections/Projects";
import Projecthighlight from "./sections/Projecthighlight";
import Techstack from "./sections/Techstack";
import Casestudies from "./sections/Casestudies";
import Nda from "./sections/Nda";
import Team from "./sections/Team";
import Connect from "./sections/Connect";
import Testimonials from "./sections/Testimonials";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import metaupspace from "../public/assets/METAUPSPACE.png";

function Development() {
  return (
    <div
      id="development"
      className="development w-full  flex flex-col justify-center items-center bg-black"
    >
      <div className="w-full bg-white flex justify-center rounded-2xl rounded-t-none">
        <div className="w-full max-w-screen-xl flex flex-col items-center rounded  py-10 gap-10 md:gap-20 bg-white px-4 md:px-6">
          <Projects />
          <Projecthighlight />
          <Techstack />

          <Casestudies />
          <Team />
          <Connect />
          <Testimonials />
        </div>
      </div>
      <footer class="w-full bg-black text-white py-2">
        <div class="container mx-auto px-4 flex justify-start items-center">
          <p class="text-sm w-1/2">© 2024 Your Company. All rights reserved</p>
          <div className="flex items-center">
            <Image src={logo} alt="Company Logo " class="h-5 w-auto" />
            <Image src={metaupspace} alt="Company Logo " class="h-4 w-auto" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Development;
