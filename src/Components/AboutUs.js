import React from 'react'

const AboutUs = () => {
  return (
    <div className='py-10 flex flex-col gap-10 items-center'>
      <h1 className='text-lg font-semibold'>This page is about the <span className='text-2xl text-[#5B8FB9]'>React Router DOM</span></h1>

      <div className='w-[36%] text-center'>
        <p className='text-lg font-semibold'>React Router Dom enables you to implement dynamic routing in web app.Unlike the traditional rounting architecture in which the routing is handled in a configuration outside of a running app,React Router Dom facilitates component based routing according to the needs of the app and platform. 
          </p>
      </div>
    </div>
   
  )
}

export default AboutUs