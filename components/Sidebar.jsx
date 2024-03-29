import Link from 'next/link';
import React from 'react';

import { RxDashboard } from 'react-icons/rx';
import { MdDisplaySettings } from 'react-icons/md';
import {SlLogout} from 'react-icons/sl'; 
import {SiBytedance} from 'react-icons/si';

//Authenticator
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

const Sidebar = ({ children }) => {
  return (
    <Authenticator>
        {({ signOut }) => (
    <div className='flex'>
        <div className='fixed w-90 h-screen p-3 bg-white border-r-[1px] flex flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <div>
                    {/* <img className='pb-6'src='/../saf-logo.png' alt='safaricom-logo' width='125' height='160'>                                   
                    </img>                   */}
                    </div>  
            
                <Link href =''>
                    <div className='bg-gray-400 text-white p-3 rounded-lg inline-block'>
                        <MdDisplaySettings size = '60'/>
                        IOT Demo
                    </div>
                </Link>
                
                <span className='border-b-[2px] border-gray-200 w-full py-4'></span>
                <Link href ='/' >
                    <div className='bg-green-600 text-white p-4 mt-8 rounded-lg inline-block' >
                        <RxDashboard size = '60'/>
                        Home
                    </div>
                </Link>


                <Link href ='/temptag' >
                    <div className='bg-green-600 text-white p-3 mt-10 rounded-lg inline-block' >
                        <SiBytedance size = '60'/>
                        Readings
                    </div>
                </Link>

                 <Link href ='' >
                    <div onClick={signOut} className='bg-red-600 text-white p-3 mt-10 rounded-lg inline-block' >
                        <SlLogout size = '60'/>
                        Signout
                    </div>
                </Link>


            </div>
        </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
        )}
    </Authenticator>
  )
  
};

export default Sidebar;