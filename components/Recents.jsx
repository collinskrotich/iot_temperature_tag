import React, { useEffect, useState }  from "react";
import axios from 'axios';
import {HiOutlineBellAlert} from 'react-icons/hi2'

const Recents = () => {
  const [dataa, setDataa] = useState([]);

  useEffect(() => {
    axios.get("/api/payload")
      .then((result) => {
        console.log("Getting data from server ::::", result.data);
        const sortedData = result.data.sort((a, b) => new Date(b.timeStamp) - new Date(a.timeStamp));
        setDataa(sortedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='w-full col-span-1 relative lg:h-[85vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1>Recent Readings</h1>
      <ul>
        {dataa.map((order, id) => (
          <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-black-100 rounded-lg p-3'>
              <HiOutlineBellAlert className='bg-yellow-400'/>
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 text-sm'>Temp: {order.arduino.Temperature}°</p>
              <p className='text-gray-800 text-sm'>Humidity: {order.arduino.Humidity}%</p>
              <p className='text-gray-800 text-sm'>Acceleration: {order.arduino.Acceleration}</p>
              <p className='text-gray-600 text-xs border-2'>Timestamp: {order.arduino.TimeStamp}</p>
            </div>
            <div>
            <p className='lg:flex md:hidden absolute right-6 text-green-600 text-sm border-2'>{order.DeviceId}</p> 
            <p className='lg:flex md:hidden absolute right-6 text-grey-600 text-xs pt-6'>Device ID</p>
              
        
            </div>

            
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Recents