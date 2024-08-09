import React from 'react'

function Projects() {
  return (
    <div className='bg-[#ffff] w-full flex justify-center justify-items-center'>
        <div className=''>
        <div className='w-full flex flex-col'>
            <p className='text-black not-italic text-center font-bold text-3xl'>We handle just about everything!</p>
            <span className='text-gray-700 text-center font-medium text-l'>Our Curated Baskets make your work easy and affordable, combining top talent and the right.</span>
           </div>
           <div>
           <div className="w-full grid grid-cols-6 grid-rows-3 gap-4 p-4">
  {/* First Card (Landing Page) */}
  <div className="col-span-3 bg-[#F3F3F3] p-4 rounded-lg shadow">
    <h3 className="text-2xl font-bold mb-2">Landing Page</h3>
    <p className="text-gray-600 mb-4">
      Unleash your brand's potential with MetaUpSpace: Resultsdriven solutions for tech, marketing, and production.
    </p>
    <img 
      className="rounded-lg h-40 object-cover"
      src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" 
      alt="Landing Page" 
    />
  </div>

  {/* Second Card (Mobile Apps) */}
  <div className="row-span-2 col-span-2 col-start-1 bg-[#F3F3F3] p-4 rounded-lg shadow">
    <h3 className="text-2xl font-bold mb-2">Mobile Apps</h3>
    <p className="text-gray-600 mb-4">
      Unleash your brand's potential with MetaUpSpace: Resultsdriven solutions for.
    </p>
    <img 
      className="rounded-lg h-56 object-cover"
      src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" 
      alt="Mobile Apps" 
    />
  </div>

  {/* Third Card (CRM) */}
  <div className="col-start-3 row-start-2 bg-[#F3F3F3] p-4 rounded-lg shadow">
    <h3 className="text-2xl font-bold mb-2">CRM</h3>
    <p className="text-gray-600 mb-4">
      Unleash your brand's potential with MetaUpSpace: Resultsdriven solution.
    </p>
    <img 
      className="rounded-lg h-56 object-cover"
      src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" 
      alt="CRM" 
    />
  </div>

  {/* Fourth Card (MVP Development) */}
  <div className="row-span-2 col-span-2 col-start-4 bg-[#F3F3F3] p-4 rounded-lg shadow">
    <h3 className="text-2xl font-bold mb-2">MVP Development</h3>
    <p className="text-gray-600 mb-4">
      Unleash your brand's potential with MetaUpSpace: tech, marketing, and production : Resultsdriven solutions.
    </p>
    <img 
      className="rounded-lg h-96 object-cover"
      src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" 
      alt="MVP Development" 
    />
  </div>

  {/* Fifth Card (E-Commerce) */}
  <div className="col-span-3 col-start-3 row-start-3 bg-[#F3F3F3] p-4 rounded-lg shadow">
    <h3 className="text-2xl font-bold mb-2">E-Commerce</h3>
    <p className="text-gray-600 mb-4">
      Unleash your brand's potential with MetaUpSpace: Resultsdriven solutions for tech, marketing, and production.
    </p>
    <img 
      className="rounded-lg h-40 object-cover"
      src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" 
      alt="E-Commerce" 
    />
  </div>

</div>


</div>

           <div className='flex justify-center justify-items-center py-10'>
            <button className='w-40 h-10 bg-black rounded '>See More</button>
           </div>
        </div>
      </div>
    
  )
}

export default Projects