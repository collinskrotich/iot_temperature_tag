import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-20 pt-4'>
        <h2 className='text-xl'>Air Quality Environmental Monitoring Dashboard</h2>
        {/* <div>
        <h2 className='pl-'>Welcome back, Ayan</h2>

        <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/saf-logo.png" alt="Rounded avatar"/>
        
        <img class="w-10 h-10 rounded-full" src="/saf-logo.png" alt=""/>
        <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div> */}
        <div className="flex flex-row">
        <div className='pt-1 pr-2'><h2>Welcome back, Ayan</h2></div>
        <div className='relative'>
          <img class="w-10 h-10 rounded-full" src="/ayan.jpeg" alt=""/> 
          <span class="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span> 
    </div> 
</div>
        
    </div>
  )
}

export default Header