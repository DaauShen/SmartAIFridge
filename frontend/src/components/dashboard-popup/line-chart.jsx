import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import "./chart.css";

export default function LineChartComponent({ close }) {
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
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>
          Line Chart of Humidity and Temperature
        </h2>

        <div className="charts-container">
          <div className="chart-wrapper">
            <h3 style={{ textAlign: "center" }}>Temperature (°C)</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="timestamp" />
                <YAxis unit="°C" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="temperature"
                  stroke="#ff7300"
                  name="Temperature (°C)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-wrapper">
            <h3 style={{ textAlign: "center" }}>Humidity (%)</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="timestamp" />
                <YAxis unit="%" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="humidity"
                  stroke="#387908"
                  name="Humidity (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}
