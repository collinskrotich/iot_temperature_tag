import React from 'react'
import {data} from '../data/data.js'
import {HiOutlineBellAlert} from 'react-icons/hi2'

const Recents = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
        <h1>Recent Readings</h1>
        <ul>
            {data.map((order, id) => (
                <li 
                key={id} 
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
                    <div className='bg-black-100 rounded-lg p-3'>
                    <HiOutlineBellAlert className='bg-blue-100'/>
                    </div>

                    <div className='pl-4'>
                        <p className='text-gray-800 font-bold'>{order.temp}</p>
                        <p className='text-gray-400 text-sm'>{order.name.first + ' ' + order.name.last}</p>
                        <p className='text-blue-300 text-sm'>{order.status}</p>

                    </div>
                    {/* <p className='lg:flex md:hidden absolute right-6 text-sm'>
                        {order.date}
                    </p> */}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Recents