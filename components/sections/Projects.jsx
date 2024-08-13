import Image from "next/image";
import React from "react";
import application1_1 from "../../public/assets/application1.1.png";
import landing from "../../public/assets/landing.png";
import crm from "../../public/assets/crm.png";
import mvp from "../../public/assets/mvp.png";
import mobile from "../../public/assets/mobile.png";
import ecommerce from "../../public/assets/ecommerce.png";

function Projects() {
  return (
    <section className="py-16">
      <div className="mx-auto px-6 max-w-6xl text-gray-500">
        <div className="w-full flex flex-col mb-5">
          <p className="text-black not-italic text-center font-bold text-3xl">
            We handle just about everything!
          </p>
          <span className="text-gray-700 text-center font-medium text-l">
            Our Curated Baskets make your work easy and affordable, combining
            top talent and the right tools to speed up your projects.
          </span>
        </div>
        <div className="relative">
          <div className="relative z-10 grid gap-3 grid-cols-6">
            {/* Customizable Feature */}
            <div className="col-span-full lg:col-span-2 overflow-hidden flex  relative p-8 rounded-xl bg-[#f3f3f3] border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <div className="size-fit m-auto relative flex flex-col gap-2 items-center">
                <div className="relative  flex items-center justify-center">
                  <Image src={landing} className="h-44 w-auto" />
                </div>
                <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-xl">
                  Landing Page
                </h2>
                <p className=" text-center text-gray-700 mb-4">
                We specialize in delivering a wide array of high-quality services, from innovative tech solutions to expert consulting, tailored to meet your unique needs.
                </p>
              </div>
            </div>

            {/* Secure by Default Feature */}
            <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden bg-[#f3f3f3]  p-8 rounded-xl  border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square h-44 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 ">
                  <Image src={crm} className="h-44 w-full" />
                </div>
                <div className="mt-6 text-center space-y-2">
                  <h2 className="text-xl font-semibold text-gray-800 transition group-hover:text-purple-950 dark:text-white">
                    CRM
                  </h2>
                  <p className="dark:text-gray-300 text-gray-700">
                  We provide powerful CRM solutions that streamline your customer management processes, enhance relationships, and drive business growth through personalized experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Faster than Light Feature */}
            <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-[#f3f3f3] border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <div>
                <div className="pt-6 lg:px-6">
                  <Image src={mobile} className="h-44 w-full" />
                </div>
                <div className="mt-14 text-center relative z-10 space-y-2">
                  <h2 className="text-xl font-semibold text-gray-800 transition group-hover:text-purple-950 dark:text-white">
                    Mobile Apps
                  </h2>
                  <p className="dark:text-gray-300 text-gray-700">
                  We design and develop cutting-edge mobile apps that offer seamless user experiences and innovative features, tailored to meet your business needs and engage your audience.
                  </p>
                </div>
              </div>
            </div>

            {/* Graph Feature */}
            <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-[#f3f3f3] border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <div className="grid sm:grid-cols-2">
                <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                  <div className="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                    <svg
                      className="size-6 m-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      {/* SVG path data */}
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-gray-800 transition group-hover:text-purple-950 dark:text-white">
                      MVP Development
                    </h2>
                    <p className="dark:text-gray-300 text-gray-700">
                    We specialize in rapid MVP development, helping you bring your innovative ideas to life with a lean, functional product that attracts early adopters and validates your market potential.
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden relative mt-6 sm:mt-auto h-fit -mb-[34px] -mr-[34px] sm:ml-6 py-6 p-6 border rounded-tl-lg dark:bg-white/5 dark:border-white/10">
                  <div className="absolute flex gap-1 top-2 left-3">
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                  </div>
                  <Image src={mvp} className="h-44 w-full" />
                </div>
              </div>
            </div>

            {/* Keep Your Loved Ones Safe Feature */}
            <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-[#f3f3f3] border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <div className="h-full grid sm:grid-cols-2">
                <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                  <div className="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                    <svg
                      className="size-6 m-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      {/* SVG path data */}
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-gray-800 transition group-hover:text-purple-950 dark:text-white">
                      E- Commerce
                    </h2>
                    <p className="dark:text-gray-300 text-gray-700">
                    We create robust e-commerce platforms that drive sales and deliver seamless shopping experiences, tailored to your brand and optimized for conversion.
                    </p>
                  </div>
                </div>
                <div className="mt-6 relative sm:-mr-[--card-padding] sm:-my-8 before:absolute before:w-px before:inset-0 before:mx-auto before:bg-gray-200 dark:before:bg-gray-800">
                  <div className="relative space-y-6 py-6 flex flex-col justify-center h-full">
                    <Image src={ecommerce} className="h-44 w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
