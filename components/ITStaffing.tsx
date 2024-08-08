import { cn } from "@/lib/utils";
import GridPattern from "./magicui/grid-pattern";

const ITStaffing = () => {
  return (
    <section className="py-20 px-30 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center">IT Staffing</h2>
        <p className="text-center  text-lg font-semibold  mt-10">
          Hiring Made Easy
        </p>

        <div className="relative flex justify-between items-center mt-20 space-x-8 px-20">
          {/* Horizontal Line */}

          {/* Step 1 */}
          <div className="relative z-10 text-center flex flex-col items-center">
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute w-16 h-16 bg-black z-10"></div>{" "}
              {/* Circle Background */}
              <div className="relative w-10 h-10 rounded-full bg-black border border-white flex items-center justify-center z-20">
                <span className="text-xl font-bold">1</span>
              </div>
            </div>
            <h3 className="text-md font-bold">
              Talk to One of our Industry Experts
            </h3>
            <p className="mt-5 text-wrap text-sm text-gray-300 text-justify px-4">
              We staff IT professionals on short-term contracts and we’ll help
              you find the candidate fit for your hiring needs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 text-center flex flex-col items-center">
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute w-16 h-16 bg-black z-10"></div>{" "}
              {/* Circle Background */}
              <div className="relative w-10 h-10 rounded-full bg-black border border-white flex items-center justify-center z-20">
                <span className="text-xl font-bold">2</span>
              </div>
            </div>
            <h3 className="text-md font-bold">
              Work With Hand-Selected Talent
            </h3>
            <p className="mt-5 text-wrap text-sm text-gray-300 text-justify px-4">
              We staff IT professionals on short-term contracts and we’ll help
              you find the candidate fit for your hiring needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 text-center flex flex-col items-center">
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute w-16 h-16 bg-black z-10"></div>{" "}
              {/* Circle Background */}
              <div className="relative w-10 h-10 rounded-full bg-black border border-white flex items-center justify-center z-20">
                <span className="text-xl font-bold">3</span>
              </div>
            </div>
            <h3 className="text-md font-bold">The Right Fit Guaranteed</h3>
            <p className="mt-5 text-wrap text-sm text-gray-300 text-justify px-4">
              We staff IT professionals on short-term contracts and we’ll help
              you find the candidate fit for your hiring needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITStaffing;