import { useMemo} from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import React, { useEffect, useState }  from "react";
import { DynamoDB } from "aws-sdk";
import axios from 'axios';

export default function Googlemap () {

  const { isLoaded } = useLoadScript({ 
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  });

  if (!isLoaded) return <div>Loading...</div>
  
  return (
    <div className='lg:col-span-2 col-span-1 bg-gray-200 flex justify-between w-full border rounded-lg '>
      <div className='flex flex-col min-w-full p-4'>
        <Map/>
      </div>
    </div>
  )
}

function Map() {

  const [dataa, setDataa] = useState([])

  useEffect(() => {
      axios.get('/api/payload')
      .then((result) => {
          console.log("Getting data from server ::::",result.data)
          const payloadData = result.data
          setDataa(result.data)

      }).catch((err) => {
          console.log(err)
      });

  }, []);

  // End of API

  return <GoogleMap zoom={11}  center={{lat: -0.2927802831, lng: 36.82997663286112}}  mapContainerClassName='map-container'>

          {/* <Marker position={{lat: -0.897632, 36.82997663286112 lng: 36.651994}}/> */}

          {dataa.map((item) => (

          <Marker
            key={item.deviceId.S}
            lat={parseFloat(item.payload.latitude)}
            lng={parseFloat(item.payload.longitude)}
          />
          ))}

          </GoogleMap>
  
}

