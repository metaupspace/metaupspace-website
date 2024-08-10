import React from "react";

function Projects() {
  return (
    <div className="bg-[#ffff] w-full flex justify-center justify-items-center">
      <div className="">
        <div className="w-full flex flex-col">
          <p className="text-black not-italic text-center font-bold text-3xl">
            We handle just about everything!
          </p>
          <span className="text-gray-700 text-center font-medium text-l">
            Our Curated Baskets make your work easy and affordable, combining
            top talent and the right.
          </span>
        </div>

        <div className="mt-3 px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2 row-span-1">
            <div className="grid grid-cols-2 gap-3 bg-[#F3F3F3] p-4 rounded-lg shadow">
              <div>
                <h3 className="text-2xl font-bold mb-2">Landing Page</h3>
                <p className="text-gray-600 mb-4">
                  Unleash your brand's potential with MetaUpSpace: Resultsdriven
                  solutions for tech, marketing, and production.
                </p>
              </div>
              <div className="object-cover">
                <img
                  className="rounded-lg h-40 "
                  src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                  alt="Landing Page"
                />
              </div>
            </div>
          </div>
          <div className=" md:col-span-1 md:row-span-2">
            {/* Fourth Card (MVP Development) */}
            <div className="bg-[#F3F3F3] p-4 rounded-lg shadow">
              <div className="w-52">
                <img
                  className="rounded-lg "
                  src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                  alt="MVP Development"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">MVP Development</h3>
                <p className="text-gray-600 mb-4">
                  Unleash your brand's potential with MetaUpSpace: tech,
                  marketing, and production : Resultsdriven solutions.
                </p>
              </div>
            </div>
          </div>
          <div className=" md:col-span-1 md:row-span-2">
            {/* Second Card (Mobile Apps) */}
            <div className=" col-start-1 bg-[#F3F3F3] p-4 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-2">Mobile Apps</h3>
              <p className="text-gray-600 mb-4">
                Unleash your brand's potential with MetaUpSpace: Resultsdriven
                solutions for.
              </p>
              <img
                className="rounded-lg w-56 object-cover"
                src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                alt="Mobile Apps"
              />
            </div>
          </div>
          <div className="md:col-span-1 md:row-span-1 ">
            {/* Third Card (CRM) */}
            <div className="grid grid-cols-2 bg-[#F3F3F3] p-4 rounded-lg shadow">
              <img
                className="rounded-lg h-[14.5rem]"
                src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                alt="CRM"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2">CRM</h3>
                <p className="text-gray-600 mb-4">
                  Unleash your brand's potential with MetaUpSpace: Resultsdriven
                  solution.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            {/* Fifth Card (E-Commerce) */}
            <div className="grid grid-cols-3  bg-[#F3F3F3] p-4 rounded-lg shadow">
              <div>
                <h3 className="text-2xl font-bold mb-2">E-Commerce</h3>
                <p className="text-gray-600 mb-4">
                  Unleash your brand's potential with MetaUpSpace: Resultsdriven
                  solutions for tech, marketing, and production.
                </p>
              </div>
              <img
                className="rounded-lg h-40 object-cover"
                src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                alt="E-Commerce"
              />
            </div>
          </div>
        </div>

        {/* <div>
          <div className="w-full grid grid-cols-6 grid-rows-3 gap-4 p-4">
            <div className="col-span-3 bg-[#F3F3F3] p-4 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-2">Landing Page</h3>
              <p className="text-gray-600 mb-4">
                Unleash your brand's potential with MetaUpSpace: Resultsdriven
                solutions for tech, marketing, and production.
              </p>
              <img
                className="rounded-lg h-40 object-cover"
                src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                alt="Landing Page"
              />
            </div>

            <div className="row-span-2 col-span-2 col-start-1 bg-[#F3F3F3] p-4 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-2">Mobile Apps</h3>
              <p className="text-gray-600 mb-4">
                Unleash your brand's potential with MetaUpSpace: Resultsdriven
                solutions for.
              </p>
              <img
                className="rounded-lg h-56 object-cover"
                src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                alt="Mobile Apps"
              />
            </div>

            <div className="col-start-3 row-start-2 bg-[#F3F3F3] p-4 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-2">CRM</h3>
              <p className="text-gray-600 mb-4">
                Unleash your brand's potential with MetaUpSpace: Resultsdriven
                solution.
              </p>
              <img
                className="rounded-lg h-56 object-cover"
                src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                alt="CRM"
              />
            </div>

            <div className="row-span-2 col-span-2 col-start-4 bg-[#F3F3F3] p-4 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-2">MVP Development</h3>
              <p className="text-gray-600 mb-4">
                Unleash your brand's potential with MetaUpSpace: tech,
                marketing, and production : Resultsdriven solutions.
              </p>
              <img
                className="rounded-lg h-96 object-cover"
                src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                alt="MVP Development"
              />
            </div>

            <div className="col-span-3 col-start-3 row-start-3 bg-[#F3F3F3] p-4 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-2">E-Commerce</h3>
              <p className="text-gray-600 mb-4">
                Unleash your brand's potential with MetaUpSpace: Resultsdriven
                solutions for tech, marketing, and production.
              </p>
              <img
                className="rounded-lg h-40 object-cover"
                src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                alt="E-Commerce"
              />
            </div>
          </div>
        </div> */}

        <div className="flex justify-center justify-items-center py-10">
          <button className="w-40 h-10 bg-black text-white rounded ">See More</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
