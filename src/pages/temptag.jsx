import React, { useEffect, useState }  from "react";
import axios from 'axios';

export default function App() {
    const [dataa, setDataa] = useState([])

    useEffect(() => {
        axios.get('/api/payload')
        .then((result) => {
            console.log("Getting data from server ::::",result.data)
            const sortedData = result.data.sort((a, b) => new Date(b.RecordedTime) - new Date(a.RecordedTime));
            setDataa(sortedData);

        }).catch((err) => {
            console.log(err)
        });

    }, []);

return (
    <div className="pl-20">
        <table class="table-auto min-w-full text-center text-sm font-light border-separate border border-slate-400 ...">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
            <th class="border border-slate-300 ...">timeStamp</th>
            <th class="border border-slate-300 ...">Temperature</th>
            <th class="border border-slate-300 ...">Acceleration</th>
            <th class="border border-slate-300 ...">DeviceId</th>
            <th class="border border-slate-300 ...">Humidity</th>
            <th class="border border-slate-300 ...">Latitude</th>
            <th class="border border-slate-300 ...">Longitude</th>
            <th class="border border-slate-300 ...">TimeStamp</th>
            </tr>
        </thead>
        <tbody>
            {dataa.map((item,id) => (

                        <tr key={id}>
                        <td class="border border-slate-300 ...">{item.timeStamp}</td>
                        <td class="border border-slate-300 ...">{item.arduino.Temperature}</td>
                        <td class="border border-slate-300 ...">{item.arduino.Acceleration}</td>                       
                        <td class="border border-slate-300 ...">{item.arduino.DeviceId}</td>
                        <td class="border border-slate-300 ...">{item.arduino.Humidity}</td>
                        <td class="border border-slate-300 ...">{item.arduino.Latitude}</td>
                        <td class="border border-slate-300 ...">{item.arduino.Longitude}</td>
                        <td class="border border-slate-300 ...">{item.arduino.TimeStamp}</td>
                        </tr>
            ))}
        </tbody>
        </table>
    </div>
);

            // <tr key={item.timeStamp}>
            //     <td class="border border-slate-300 ...">{item.timeStamp.S}</td>
            //     <td class="border border-slate-300 ...">{item.payload.M.latitude.N}</td>
            //     <td class="border border-slate-300 ...">{item.payload.M.temperature.N}</td>
            //     <td class="border border-slate-300 ...">{item.payload.M.relativeHumidity.N}</td>
            //     <td class="border border-slate-300 ...">{item.payload.M.pressure.N}</td>
            //     <td class="border border-slate-300 ...">{item.payload.M.soundLevels.N}</td>
            //     <td class="border border-slate-300 ...">{item.payload.M.deviceId.S}</td>
            //     <td class="border border-slate-300 ...">{item.payload.M.longitude.N}</td>
            //     <td class="border border-slate-300 ...">{item.payload.M.airQualityIndex.N}</td>
            // </tr>

}