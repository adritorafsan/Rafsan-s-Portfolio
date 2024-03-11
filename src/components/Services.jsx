import React from 'react'
import ServicesBox from './ServicesBox'

const Services = () => {
  return (
    <>
        <section className=' flex justify-center items-center flex-col  py-5 '>
            <div className='text-center space-y-3 mt-3 '>
                <h1 className='inline-block font-bold text-3xl dark:text-white text-slate-800  border-b-4 rounded-[3px] py-3  border-primary'>Services</h1>
                <p className='md:w-[50%] mx-auto font-semibold text-slate-500'>There are some Projects Link , Which I have built through out my little journy . I will try to build more and more . Coz It's my passsion </p>
            </div>

            {/* Services Box */}
            <div className='-z-10'>
                <ServicesBox />
            </div>

        </section>
    
    
    
    </>
  )
}

export default Services