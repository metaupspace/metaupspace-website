import React from "react";

function StaffingType() {
  return (
    <div className="bg-black py-40 flex justify-center items-center">
      {/* Image on the left */}
      <div className="relative">
        <img
          src="../assets/staffing.png"
          alt="Staffing Types"
          className="w-full h-auto"
        />
      </div>

      {/* Text content on the right */}
      <div className="ml-12 w-2/5 px-10 text-white">
        <div className="mb-12">
          <h3 className="text-xl font-bold">CONTRACT</h3>
          <p className="mt-2 text-gray-400">
            We staff IT professionals on short term contracts and we'll help you
            find the right candidate for your hiring needs.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold">PERMANENT</h3>
          <p className="mt-2 text-gray-400">
            Need IT staffing for permanent positions? From entry level to
            C-suite, we’ll help you find the skillset for your team.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">CONTRACT-TO-PERMANENT</h3>
          <p className="mt-2 text-gray-400">
            As an IT staffing company, we’ll help you find IT professionals who
            have the work ethic and culture fit for long-term to permanent
            positions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StaffingType;
