import { useEffect, useState } from "react";
import {
  LineChart as Chart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend
} from "recharts";

export default function LineChartComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/fridge/history")
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
    <div>
      <h2>Biểu đồ Nhiệt độ và Độ ẩm</h2>
      <Chart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#ff7300" name="Nhiệt độ (°C)" />
        <Line type="monotone" dataKey="humidity" stroke="#387908" name="Độ ẩm (%)" />
      </Chart>
    </div>
  );
}
