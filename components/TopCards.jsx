import React from 'react'
import DonutCO from './DonutCO'
import DonutPM25 from './DonutPM25'
import DonutCO2 from './DonutCO2'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-6 gap-4 py-12 px-20'>

        {/* top cards */}
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col min-w-full pb-1'>
                <DonutCO />
            </div>
        </div>

        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col min-w-full pb-1'>
                <DonutCO2 />
            </div>
        </div>

        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col min-w-full pb-1'>
                <DonutPM25 />
            </div>
        </div>

        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold '>23.7 °C</p>
                <p className='text-gray-600'>Average Temperature</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-4 rounded-lg'>
                <span>+23%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold '>78.4%</p>
                <p className='text-gray-600'>Relative Humidity</p>
            </div>
            <p className='bg-red-200 flex justify-center items-center p-4 rounded-lg'>
                <span>-9%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold '>12</p>
                <p className='text-gray-600'>UV Index</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-4 rounded-lg'>
                <span>+7%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold '>13 AQI</p>
                <p className='text-gray-600'>Air Quality Index</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-4 rounded-lg'>
                <span>-19%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold '>1020 mbar</p>
                <p className='text-gray-600'>Pressure</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-4 rounded-lg'>
                <span>+3%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold '>38.2 dB</p>
                <p className='text-gray-600'>Sound levels</p>
            </div>
            <p className='bg-red-200 flex justify-center items-center p-4 rounded-lg'>
                <span>+31%</span>
            </p>
        </div>
    </div>
  )
}

export default TopCards