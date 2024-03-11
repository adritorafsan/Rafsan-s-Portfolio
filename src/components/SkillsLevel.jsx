import React from 'react'

const SkillsLevel = ({ skillname, parcentage }) => {
  return (
    <>
      <div className='mt-4 space-y-2'>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-md text-slate-600 dark:text-white'>{skillname}</p>
          <p className='font-semibold text-[14px] text-slate-600 dark:text-white'>{parcentage}</p>
        </div>
        <div className='bg-slate-300 w-full rounded-full h-2'>
          <div
            style={{ width: `${parcentage}` }}
            className='bg-red-500 dark:bg-primary h-2 rounded-full '></div>
        </div>
      </div>
    </>
  )
}

export default SkillsLevel