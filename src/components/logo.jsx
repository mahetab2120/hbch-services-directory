import React from 'react'
import hbch from '../assets/hbch.jpeg'

function Logo() {
  return (
    <div className='min-v-64 flex w-full shadow-sm shadow-green-500 justify-items-stretch'>
        <img className='v-24 m-2 ml-16 w-20 xl:w-28 flex-2' src={hbch} alt="" />
        <h1 className='flex-1 text-center content-center font-semibold text-2xl xl:text-3xl  text-logo'><span>Homi Bhabha Cancer Hospital & Research Centre,</span><br/> <span> New Chandigarh, Punjab </span></h1>
        <img className='v-24 m-2 mr-16 w-20 xl:w-28 flex-2' src="http://10.80.1.9/Intranet_webpage/tmc%20new%20logo.png" alt="" />
    </div>
  )
}

export default Logo