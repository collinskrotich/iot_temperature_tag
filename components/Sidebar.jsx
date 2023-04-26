import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import {GiIceCube } from 'react-icons/gi';
import {FaTemperatureLow} from 'react-icons/fa';
import {FiSettings} from 'react-icons/fi';
import {TbMapPins} from 'react-icons/tb';
import {SlLogout} from 'react-icons/sl';

//Authenticator
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);


const Sidebar = ({ children }) => {
  return (
    <Authenticator>
        {({ signOut, user }) => (
    <div className='flex'>
        <div className='fixed w-90 h-screen p-3 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <div>
                    <img className='pb-6'src='/../saf-logo.png' alt='safaricom-logo' width='125' height='160'>                                   
                    </img>                  
                    </div>  
            
                <Link href ='/'>
                    <div className='bg-gray-400 text-white p-3 rounded-lg inline-block'>
                        <GiIceCube size = '60'/>
                        IOT Cube
                    </div>
                </Link>
                
                <span className='border-b-[2px] border-gray-200 w-full py-4'></span>
                <Link href ='/' >
                    <div className='bg-green-600 text-white p-4 mt-8 rounded-lg inline-block' >
                        <RxDashboard size = '60'/>
                        Home
                    </div>
                </Link>

                 <Link href ='' >
                    <div onClick={signOut} className='bg-red-600 text-white p-3 mt-10 rounded-lg inline-block' >
                        <SlLogout size = '60'/>
                        Logout
                    </div>
                </Link>

                

               {/* <Link href ='/users' >
                    <div className='bg-green-600 text-white p-3 mt-10 rounded-lg inline-block' >
                        <MdForest size = '60'/>
                        Regions
                    </div>
                </Link> */}



                {/* <Link href ='/maps' >
                    <div className='bg-green-600 text-white p-3 mt-10 rounded-lg inline-block' >
                        <TbMapPins size = '60'/>
                        Map
                    </div>
                </Link>

                <Link href ='/temptag' >
                    <div className='bg-green-600 text-white p-3 mt-10 rounded-lg inline-block' >
                        <FiSettings size = '60'/>
                    </div>
                </Link> */}


            </div>
        </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
        )}
    </Authenticator>
  )
  
};

export default Sidebar;