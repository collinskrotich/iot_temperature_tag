import React, { useEffect, useState }  from "react";
import axios from 'axios';

export default function App() {
    const [dataa, setDataa] = useState([])

    useEffect(() => {
        axios.get('/api/payload')
        .then((result) => {
            console.log("Getting data from server ::::",result.data[0].payload)
            setDataa(result.data)  

              const payloadData = result.data; 
                console.log("payload data",payloadData);

        }).catch((err) => {
            console.log(err)
        });

    }, []);

return (
    <div className="pl-20">
        <table class="table-auto min-w-full text-center text-sm font-light border-separate border border-slate-400 ...">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
            <th class="border border-slate-300 ...">Time Stamp</th>
            <th class="border border-slate-300 ...">Latitude</th>
            <th class="border border-slate-300 ...">Temperature</th>
            <th class="border border-slate-300 ...">Relative Humidity</th>
            <th class="border border-slate-300 ...">Pressure</th>
            <th class="border border-slate-300 ...">Sound Levels</th>
            <th class="border border-slate-300 ...">Device ID</th>
            <th class="border border-slate-300 ...">Longitude</th>
            <th class="border border-slate-300 ...">Air Quality Index</th>
            </tr>
        </thead>
        <tbody>
            {dataa.map((item) => (
            <tr key={item.timeStamp}>
                <td class="border border-slate-300 ...">{item.timeStamp}</td>
                <td class="border border-slate-300 ...">{item.payload.latitude}</td>
                <td class="border border-slate-300 ...">{item.payload.temperature}</td>
                <td class="border border-slate-300 ...">{item.payload.relativeHumidity}</td>
                <td class="border border-slate-300 ...">{item.payload.pressure}</td>
                <td class="border border-slate-300 ...">{item.payload.soundLevels}</td>
                <td class="border border-slate-300 ...">{item.payload.deviceId}</td>
                <td class="border border-slate-300 ...">{item.payload.longitude}</td>
                <td class="border border-slate-300 ...">{item.payload.airQualityIndex}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
);


    // function Table(dataa) {
    //     const data = dataa.data;
    //     console.log(data)
      
    //     return (
    //       <table>
    //         <thead>
    //           <tr>
    //                  <th>Timestamp</th>
    //                  <th>Device ID</th> 
    //                  <th>Relative Humidity</th>
    //                  <th>Temperature</th> 
    //                  <th>Pressure</th>
    //                  <th>Sound Levels</th> 
    //                  <th>Air Quality Index</th>
    //                  <th>Longitude</th>
    //                  <th>Latitude</th> 
    //           </tr>
    //         </thead>
    //         <tbody>

    //           {data.map((payload, index) => (
    //             <tr key={index}>
    //               <td>{payload.name}</td>
    //               <td>{payload.email}</td>
    //               <td>
    //                 <ul>
    //                   <li>{payload.address.street}</li>
    //                   <li>{payload.address.city}</li>
    //                   <li>{payload.address.state}</li>
    //                   <li>{payload.address.zip}</li>
    //                 </ul>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     );
    //   }
    // const arr = [data].map((data, index) => {
    //     return (
    //       <tr key={index}>
    //         {/* <td>{data.timeStamp}</td>
    //         <td>{data.deviceId}</td>
    //         <td>{data.relativeHumidity}</td>
    //         <td>{data.temperature}</td>
    //         <td>{data.pressure}</td>
    //         <td>{data.soundLevels}</td>
    //         <td>{data.airQualityIndex}</td>
    //         <td>{data.latitude}</td>
    //         <td>{data.longitude}</td> */}
    //       </tr>
    //     )
    //   })
      
    //     return (
    //         <div className="pl-20">
    //           <table>
    //             <tbody>
    //               <tr>
    //                 <th>Timestamp</th>
    //                 <th>Device ID</th> 
    //                 <th>Relative Humidity</th>
    //                 <th>Temperature</th> 
    //                 <th>Pressure</th>
    //                 <th>Sound Levels</th> 
    //                 <th>Air Quality Index</th>
    //                 <th>Latitude</th> 
    //                 <th>Longitude</th>
    //               </tr>
    //                 {arr}
    //             </tbody>
    //           </table>
    //         </div>
    //        );
}