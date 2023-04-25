import React, { useEffect, useState }  from "react";
import axios from 'axios';

export default function App() {
    const [dataa, setDataa] = useState([])

    useEffect(() => {
        axios.get('/api/payloadv3')
        .then((result) => {
            console.log("Getting data from server ::::",result.data)
            const payloadData = result.data
            setDataa(result.data)

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
                <td class="border border-slate-300 ...">{item.timeStamp.S}</td>
                <td class="border border-slate-300 ...">{item.payload.M.latitude.N}</td>
                <td class="border border-slate-300 ...">{item.payload.M.temperature.N}</td>
                <td class="border border-slate-300 ...">{item.payload.M.relativeHumidity.N}</td>
                <td class="border border-slate-300 ...">{item.payload.M.pressure.N}</td>
                <td class="border border-slate-300 ...">{item.payload.M.soundLevels.N}</td>
                <td class="border border-slate-300 ...">{item.payload.M.deviceId.S}</td>
                <td class="border border-slate-300 ...">{item.payload.M.longitude.N}</td>
                <td class="border border-slate-300 ...">{item.payload.M.airQualityIndex.N}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
);

}