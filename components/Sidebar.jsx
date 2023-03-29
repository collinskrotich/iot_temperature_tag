import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import {GiIceCube } from 'react-icons/gi';
import {FaTemperatureLow} from 'react-icons/fa';
import {FiSettings} from 'react-icons/fi';
import {TbMapPins} from 'react-icons/tb';


const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
        <div className='fixed w-90 h-screen p-3 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Link href ='/'>
                    <div className='bg-green-600 text-white p-3 rounded-lg inline-block'>
                        <GiIceCube size = '40'/>
                        IOT Cube
                    </div>
                </Link>
                <span className='border-b-[2px] border-gray-200 w-full py-2'></span>
                <Link href ='/' >
                    <div className='bg-green-600 text-white p-3 mt-8 rounded-lg inline-block' >
                        <RxDashboard size = '40'/>
                        Home
                    </div>
                </Link>

                <Link href ='/' >
                    <div className='bg-green-600 text-white p-3 mt-10 rounded-lg inline-block' >
                        <RxPerson size = '40'/>
                        Users
                    </div>
                </Link>

                <Link href ='/' >
                    <div className='bg-green-600 text-white p-3 mt-10 rounded-lg inline-block' >
                        <FaTemperatureLow size = '40'/>
                        Temp
                    </div>
                </Link>

                <Link href ='/' >
                    <div className='bg-green-600 text-white p-3 mt-10 rounded-lg inline-block' >
                        <TbMapPins size = '40'/>
                        Map
                    </div>
                </Link>

                <Link href ='/' >
                    <div className='bg-green-600 text-white p-3 mt-10 rounded-lg inline-block' >
                        <FiSettings size = '40'/>
                        Temp
                    </div>
                </Link>


            </div>
        </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;