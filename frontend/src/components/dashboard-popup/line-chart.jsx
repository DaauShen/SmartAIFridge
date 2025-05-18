import { useEffect, useState } from "react";
import {
  LineChart as Chart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend
} from "recharts";
import './chart.css'

export default function LineChartComponent({close}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/fridge/history")
      .then((res) => res.json())
      .then((data) =>
        setData(
          data.map((item) => ({
            ...item,
            timestamp: new Date(item.timestamp).toLocaleTimeString(),
          }))
        )
      );
  }, []);

  return (
    <div className="sys">
      <div className="display">
        <h2 style={{marginBottom:"20px"}}>Line Chart of Humidity and Temperature</h2>

        <Chart width={600} height={300} data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#ff7300" name="Temperature (°C)" />
          <Line type="monotone" dataKey="humidity" stroke="#387908" name="Humidity (%)" />
        </Chart>
        <button onClick = {close}>Close</button>
      </div>

    </div>
  );
}

