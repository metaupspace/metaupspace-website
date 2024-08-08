import React from 'react'

function Testimonials() {
  return (
    <div className="bg-white flex flex-col items-center py-10">
  <h2 className="text-2xl md:text-3xl font-semibold text-center text-black mb-4">
    What Our Customer Say About Us?
  </h2>
  <p className="text-gray-500 text-center mb-8">
    Our Curated Baskets make your work easy and affordable, combining top talent and the right.
  </p>

  <div className="flex flex-col md:flex-row justify-center gap-6 w-full px-4 md:px-0">
    <div className="bg-[#f3f3f3] border border-gray-200 rounded-3xl shadow p-6 md:w-1/2">
      <h4 className="text-lg font-bold text-black mb-2">
        Ashutosh Pratap Singh
      </h4>
      <p className="text-sm text-gray-600 mb-4">
        Founder, Technical Sapien (1M+ Followers)
      </p>
      <p className="text-gray-700 text-sm">
        I am writing this recommendation to express my gratitude towards the community management services provided by MetaupSpace to Technical Sapien. As the founder of Technical Sapien, I am impressed by the exceptional work done by your team. <br/><br/>
        Not only that, but your team has also helped us manage our humongous community of 500,000+ members, which we proudly refer to as India's biggest tech-productive community.
      </p>
    </div>

    <div className="bg-gray-300 border border-gray-200 rounded-3xl shadow p-6 md:w-1/2">
      {/* This is a placeholder for another testimonial or content */}
    </div>
  </div>
</div>

  )
}

export default Testimonials