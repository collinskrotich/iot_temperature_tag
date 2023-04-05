import React from 'react'
import { data } from '../../data/data'
import {BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs'

const Users = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between p-4'>
            <h2 className='px-20'>Regions</h2>
            <h2>Welcome back, Collins</h2>
        </div>
        <div className='w-full m-auto px-10 border rounded-lg bg-white overflow-y-auto'>
            <div className='my-3 py-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <span className='px-20'>Name</span>
                <span className='sm:text-left text-right'>County</span>
                <span className='hidden md:grid'>Last Reading</span>
                <span className='hidden sm:grid'>Device</span>
            </div>
            <ul>
                {data.map((order, id) => (
                    <li key={id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 px-20 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                        <div className='flex items-center'>
                            <div className='bg-green-600 p-3 rounded-lg'>
                                <BsPersonFill className='text-white'/>
                            </div>
                            <p className='pl-4'>{order.name.first + ' ' + order.name.last}</p>
                        </div>
                        <p className='text-gray-600 sm:text-left text-right'>{order.county}</p>
                        <p className='hidden md:flex'>{order.date}</p>
                        <div className='sm:flex hidden justify-between items-center'>
                            <p>{order.deviceID}</p>
                            <BsThreeDotsVertical/>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    </div>
  )
}

export default Users