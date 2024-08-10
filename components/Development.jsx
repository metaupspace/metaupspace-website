import React from 'react'
import Projects from './sections/Projects'
import Projecthighlight from './sections/Projecthighlight'
import Techstack from './sections/Techstack'
import Casestudies from './sections/Casestudies'
import Nda from './sections/Nda'
import Team from './sections/Team'
import Connect from './sections/Connect'
import Testimonials from './sections/Testimonials'

function Development() {
  return (
<div className='w-full  flex justify-center items-center  bg-black'>
  <div className='w-full bg-white flex justify-center rounded-xl'>
  <div className='w-full max-w-screen-xl flex flex-col items-center rounded  py-10 gap-10 md:gap-20 bg-white px-4 md:px-6'>
    <Projects />
    <Projecthighlight />
    <Techstack />
    <Nda />
    <Casestudies />
    <Team />
    <Connect />
    <Testimonials />
  </div>
  </div>
</div>

  
  )
}

export default Development