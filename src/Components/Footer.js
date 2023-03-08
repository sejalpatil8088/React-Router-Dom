import React from 'react'

const Footer = () => {
  return (
    <div className='h-[30vh]  flex flex-col items-center justify-center gap-8'>
      <a 
      href='https://github.com/sejalpatil8088' 
      className='flex items-center gap-5'
      >  
        <i className="fa-brands fa-github"></i>
        <p className='text-xl text-[#5B8FB9] font-semibold'> GitHub</p>
      </a>
      <a 
      href='https://www.linkedin.com/in/sejal-patil-102b61223/' 
      className='flex items-center gap-5'
      >  
        <i class="fa-brands fa-linkedin"></i>
        <p className='text-xl text-[#5B8FB9] font-semibold'> linkedin</p>
      </a>
    </div>
  )
}

export default Footer