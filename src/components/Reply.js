import React, { useState } from 'react'
import Attachment from './Attachment'

function Reply() {

  const [attach , setAttach] = useState(false);
  const handleClick = () => setAttach(!attach)
  

  return (
    <div className='fixed bottom-20 w-[343px] h-[42px] bg-white flex mx-4 justify-between '>

    

    <div className='text-sm items-center flex pl-3 text-[#B7B7B7]  '><span className='font-semibold text-sm text-black'>I</span>Reply to @Rohit Yadav</div>

    

<div className='flex items-center gap-4 pr-4'>

<div onClick={handleClick}>
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6271 8.08291L9.11408 15.5959C7.40554 17.3045 4.63544 17.3045 2.9269 15.5959C1.21835 13.8874 1.21835 11.1173 2.9269 9.40874L10.4399 1.89573C11.5789 0.756701 13.4257 0.756701 14.5647 1.89573C15.7037 3.03476 15.7037 4.88149 14.5647 6.02052L7.34631 13.2389C6.7768 13.8084 5.85343 13.8084 5.28392 13.2389C4.7144 12.6694 4.7144 11.746 5.28392 11.1765L11.6184 4.84201" stroke="#141E0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div className={!attach ? 'hidden': 'none' }><Attachment></Attachment></div>

</div>

<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.75036 8.00002H3.16702M3.09648 8.24294L1.15071 14.0552C0.997847 14.5118 0.921417 14.7401 0.976267 14.8807C1.0239 15.0028 1.1262 15.0954 1.25244 15.1306C1.3978 15.1712 1.61736 15.0724 2.05647 14.8748L15.9827 8.60797C16.4113 8.4151 16.6256 8.31866 16.6918 8.1847C16.7494 8.06831 16.7494 7.93174 16.6918 7.81535C16.6256 7.68139 16.4113 7.58495 15.9827 7.39208L2.05161 1.12313C1.61383 0.926124 1.39493 0.827622 1.24971 0.868029C1.1236 0.903121 1.0213 0.995442 0.973507 1.11731C0.91847 1.25764 0.994084 1.48545 1.14531 1.94108L3.09702 7.8213C3.12299 7.89955 3.13598 7.93868 3.14111 7.9787C3.14565 8.01421 3.14561 8.05016 3.14097 8.08565C3.13574 8.12566 3.12265 8.16475 3.09648 8.24294Z" stroke="#141E0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
    </div>
  )
}

export default Reply;