import React from 'react'
import {MdOutlineWifi} from "react-icons/md";
import {BsBatteryFull} from "react-icons/bs";
import {IoIosWifi } from "react-icons/io";
import {IoCellularSharp} from "react-icons/io5";


var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();

	if (minutes < 10) {
	 minutes = "0" + minutes;
  }

	var time = (hours + ":" + minutes)

function StatusBar() {
  return (
    <div className='w-[375px] h-[47px] pt-[14px] pr-[26px] pb-[12px] pl-[27px] flex justify-between items-center fixed z-50  rounded-[32px]   '>
    
    
    <div className='w-[54px] h-[22px] font-semibold text-[17px] leading-[22px] text-center items-center'>
        {time}
    </div>

    <div className='flex justify-evenly items-center  w-[78.26px] h-[13px] z-10 top-[18px] '>

    <IoCellularSharp size={18}></IoCellularSharp>
    
    <IoIosWifi size={18}></IoIosWifi>
    
    <BsBatteryFull size={18}></BsBatteryFull>
    
    </div>
    
    </div>
  )
}

export default StatusBar