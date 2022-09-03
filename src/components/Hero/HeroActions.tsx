import React from 'react'

const HeroActions = () => {
  return (
    <div className='flex flex-col items-center gap-[20px] sm:flex-row sm:gap-[10px]'>
        <input className='bg-white w-[300px] phone:w-[404px] h-[60px] font20 rounded-[5px] border-red-500 text-myGray5 pl-[15px]' type="text" placeholder='Enter Your Website Link' />
        <button className='btnStandard'>Send Proposal</button>
    </div>
  )
}

export default HeroActions