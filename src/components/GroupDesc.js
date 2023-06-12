import React, { useState } from 'react'
import SearchDropdown from './SearchDropdown';

function GroupDesc() {

  const [status , setStatus] = useState(false);
  const handleClick = () => setStatus(!status)

  return (
    <div className='h-[48px] w-[343px]   mt-5 flex  gap-4 items-center '>

                

                <div>
                    <img src={require("../assets/1.png")} className='w-12 h-12 rounded-full ml-4 mr-2'></img>
                </div>
                

                <div className=' w-[215px] h-[46px] text-lg  font-semibold mr-6 mb-2 '><span className='text-[#606060] font-medium text-base'>From</span>IGI Airport, T3<br /><span className='text-[#606060] font-medium text-base'>To</span> Sector 28</div>


                <div className='flex items-center relative  justify-center mb-2 pl-3' onClick={handleClick} >
                <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10C2.55228 10 3 9.55228 3 9C3 8.44772 2.55228 8 2 8C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10Z" stroke="#141E0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z" stroke="#141E0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 17C2.55228 17 3 16.5523 3 16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16C1 16.5523 1.44772 17 2 17Z" stroke="#141E0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className={!status ? 'hidden': 'none' }><SearchDropdown></SearchDropdown></div>


                </div>



            </div>
  )
}

export default GroupDesc