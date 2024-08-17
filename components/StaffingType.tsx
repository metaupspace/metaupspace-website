import React from "react";

import { AnimatedBeamMultipleOutputDemo } from "./animatedBeamDesign";

function StaffingType() {
  return (
    <div
      id="types-staffing"
      className="bg-black py-40 md:flex md:flex-row flex-col justify-center items-center"
    >
      {/* Image on the left */}
      <div className="w-full">
        <AnimatedBeamMultipleOutputDemo/>
        {/* <img
          src="../assets/staffing.png"
          alt="Staffing Types"
          className="w-full h-auto px-2"
        /> */}
      </div>

      {/* Text content on the right */}
      <div className="ml-12 md:w-2/5 px-10 text-white">
        <div className="mb-12">
          <h3 className="text-xl font-bold">CONTRACT</h3>
          <p className="mt-2 text-gray-400">
            We specialize in IT staffing with a focus on contract-based hiring,
            providing flexible and tailored solutions to meet your temporary or
            project-specific needs. Let us connect you with top tech talent for
            the duration you require.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold">PERMANENT</h3>
          <p className="mt-2 text-gray-400">
            We excel in IT staffing with a focus on permanent placements,
            connecting you with top-tier tech talent for long-term roles. Let us
            help you build a stable and skilled workforce tailored to your
            business needs.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">CONTRACT-TO-PERMANENT</h3>
          <p className="mt-2 text-gray-400">
            We offer IT staffing solutions with a focus on contract-to-permanent
            placements, allowing you to assess top tech talent on a contract
            basis before making a long-term commitment. Find the perfect fit for
            your team with flexibility and confidence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StaffingType;
