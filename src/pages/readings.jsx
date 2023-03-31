import React from 'react'
import {FaTemperatureLow} from 'react-icons/fa';
import { BsThreeDotsVertical} from 'react-icons/bs';
import { data } from '../../data/data';


const readings = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between px-4 pt-4'>
            <h2 className='pl-20'>Readings</h2>
            <h2>Welcome Back, Collins</h2>
        </div>
        <div className='px-20'>
            <div className='w-full m-auto p-2 border rounded-lg bg-white overflow-y-auto'>
                <div className='my-3 py-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                    <span>Reading</span>
                    <span className='sm:text-left text-right'>Status</span>
                    <span className='hidden md:grid'>Last Reading</span>
                    <span className='hidden sm:grid'>Device</span>
                </div>
                <ul>
                    {data.map((order, id) => (
                        <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 px-20 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                        <div className='flex'>
                            <div className='bg-green-600 p-3 rounded-lg'>
                                <FaTemperatureLow className='text-gray-600'/>
                            </div>
                            <div className='pl-4'>
                                <p className='text-gray-800 font-bold'>{order.temp.toLocaleString()}</p>
                                <p className='text-gray-800 text-sm'>{order.name.first + ' ' + order.name.last}</p>
                            </div>
                        </div>
                        <p className='text-gray-600 sm:text-left text-right'>
                            <span className={
                                order.status == 'Humidity'
                                ? 'bg-green-200 p-2 rounded-lg'
                                : order.status == 'Temperature'
                                ? 'bg-blue-200 p-2 rounded-lg'
                                : 'bg-yellow-200 p-2 rounded-lg'
                            }
                            >{order.status}
                            </span>
                        </p>
                        <p className='hidden md:flex'>{order.date}</p>
                        <div className='sm:flex hidden justify-between items-center'>
                            <p>{order.deviceID}</p>
                            <BsThreeDotsVertical />
                        </div>

                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </div>
  )
}

export default readings