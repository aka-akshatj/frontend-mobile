import React from 'react'
import GroupName from './GroupName'
import GroupDesc from './GroupDesc'

function Group() {
    return (
        <div className='w h-[115px] fixed z-40  '>

            <GroupName></GroupName>
            

            <GroupDesc></GroupDesc>

            <div className='border-[1px] mt-4'></div>

        </div>
    )
}

export default Group