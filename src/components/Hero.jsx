import React from 'react'
import heroimg from '../assets/Hero.jpg'

const Hero = () => {
  return (
    <>
    <main className='md:px-4 px-4 max-w-screen-2xl h-screen flex justify-center items-center mt-48  mx-auto '>
      <div className='flex md:flex-row gap-8 md:gap-0  flex-col-reverse justify-center items-center'>
        {/* For Text Section */}
        <div className='space-y-2   py-2'>
          <p className='md:text-3xl text-xl text-slate-500 font-semibold dark:text-white '>Hello</p>
          <h1 className='dark:text-white md:text-4xl text-2xl'>I'm <span className='md:text-6xl text-3xl text-primary font-bold'>Adrito Rafsan</span></h1>
          <h3 className='md:w-2/4 text-slate-500 text-lg font-semibold dark:text-white'>Learning Frontend With React Js and Tailwind Css . Already Created so many projects with HTML , CSS & JS</h3>
          <p className='md:w-3/4 text-md text-gray-700 dark:text-white/80'>A 15 years old boy from Bangladesh . Try to code for his interest created by his brother Named Arian Zesan . A ui/ux Designer. They are on a mission . Now I'm in class 10 . SSC Batch-25 </p>
          <button href="https://www.youtube.com/channel/UCLUlzYryKHAEEzc0X-mX6hw" className='primary-btn'>Visit YT</button>
        </div>


        {/* For Images */}
        <div >
          <img src={heroimg}  alt="Image Not Found" className='lg:h-[400px] h-[340px] w-[500px] rounded-[45px] shadow-2xl md:w-[400px]' />
        </div>
      </div>
    </main>
    </>
  )
}

export default Hero