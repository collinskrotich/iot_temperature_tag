import Image from 'next/image'
import React from 'react'
import { camelCase } from "lodash";

//Authenticator
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}



const Header = () => {
  return (
    <Authenticator>
      {({ user }) => (
        // const camelCaseUsername = user ? toCamelCase(user.username) : "";
        
    <div className='flex justify-between px-20 pt-4'>
        <h2 className='text-xl'>Temperature Tag Dashboard</h2>
        <div className="flex flex-row">


          {/* const camelCaseUsername = user ? camelCase(user.username) : "";
          <div>{camelCaseUsername}</div> */}

        

        {/* return <div className='pt-1 pr-2'><h2>Welcome back, {toCamelCase(user.username)}</h2></div>; */}

        <div className='pt-1 pr-2'><h2>Welcome back, {camelCase(user.username) }</h2></div>
        <div className='relative'>
          <img class="w-10 h-10 rounded-full" src="/motorcyclist.png" alt=""/> 
          <span class="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> 
        </div> 
        </div>       
    </div>
      )}

    </Authenticator>
  )
}

export default Header