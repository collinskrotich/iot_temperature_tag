import { useMemo} from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Googlemap () {
  const { isLoaded } = useLoadScript({ 
    googleMapsApiKey: "AIzaSyAswdzWXXGYOEEF5VG6PDrjEeXGYkbc424",
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

  return <GoogleMap  
           zoom={11}  
           center={{lat: -0.897632, lng: 36.651994}}   
           mapContainerClassName='map-container'
           >
          <Marker position={{lat: -0.897632, lng: 36.651994}}/>
  </GoogleMap>
}

