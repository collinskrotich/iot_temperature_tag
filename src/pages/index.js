import Head from 'next/head'
import Image from 'next/image'
import BarChart from '../../components/BarChart';

import Header from '../../components/Header';
import Recents from '../../components/Recents';
import TopCards from '../../components/TopCards';

export default function Home() {
  return (
    <>
      <Head>
        <title>IoT Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-gray-100 min-h-screen'>

        <Header />
        <TopCards />
        <div className='px-12 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <Recents />
        </div>
        

      </main>
      </>
      );
  }