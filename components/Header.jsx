import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-20 pt-4'>
        <h2 className='text-xl'>Temperature Tag Dashboard</h2>
        <div className="flex flex-row">
        <div className='pt-1 pr-2'><h2>Welcome back, Ayan</h2></div>
        <div className='relative'>
          <img class="w-10 h-10 rounded-full" src="/ayan.jpeg" alt=""/> 
          <span class="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> 
    </div> 
</div>
        
    </div>
  )
}

export default Header