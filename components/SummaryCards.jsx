import React, { useEffect, useState} from 'react';
import axios from 'axios';


const SummaryCards = () => {
    // Start of API
    const [dataa, setDataa] = useState([])

    useEffect(() => {
        axios.get('/api/payload')
        .then((result) => {
            console.log("Getting data from server ::::",result.data)
            setDataa(result.data)
  
        }).catch((err) => {
            console.log(err)
        });
  
    }, []);

    // sort the data in descending order based on timestamp
const sortedData = [...dataa].sort((a, b) => b.timeStamp - a.timeStamp);
// get the latest data
const latestData = sortedData.slice(0, 1)[0];

  return (
    <div>
      {latestData && (
  <div key={latestData.deviceId}>
    <div className='grid lg:grid-cols-6 gap-4 py-12 px-20'>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold '>{latestData.arduino.Temperature}</p>
          <p className='text-gray-600'>Average Temperature</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-4 rounded-lg'>
          <span>+23%</span>
        </p>
      </div>
      
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold '>{latestData.arduino.Humidity}</p>
          <p className='text-gray-600'>Relative Humidity</p>
        </div>
        <p className='bg-red-200 flex justify-center items-center p-4 rounded-lg'>
          <span>-9%</span>
        </p>
      </div>
      
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold '>{latestData.arduino.Acceleration}</p>
          <p className='text-gray-600'>Acceleration</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-4 rounded-lg'>
          <span>+7%</span>
        </p>
      </div>
    </div>
  </div>
)}
</div>
)}

export default SummaryCards