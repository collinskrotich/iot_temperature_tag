import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import React, { useEffect,useMemo, useState }  from "react";
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
  const [dataa, setDataa] = useState([]);

  useEffect(() => {
    axios.get("/api/payload").then((result) => {
      console.log("Getting data from server ::::", result.data);
      setDataa(result.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const latestData = useMemo(() => {
    // Sort the data in descending order based on timestamp
    const sortedData = [...dataa].sort((a, b) => b.timeStamp - a.timeStamp);
    // Get the latest data
    return sortedData[0];
  }, [dataa]);

  return (
    <GoogleMap
      zoom={11}
      mapContainerClassName="map-container"
      center={{
        lat: parseFloat(latestData?.arduino?.Latitude ?? 0),
        lng: parseFloat(latestData?.arduino?.Longitude ?? 0),
      }}
    >
      {latestData && (
        <Marker
          position={{
            lat: parseFloat(latestData?.arduino?.Latitude ?? 0),
            lng: parseFloat(latestData?.arduino?.Longitude ?? 0),
          }}
        />
      )}
    </GoogleMap>
  );
}


