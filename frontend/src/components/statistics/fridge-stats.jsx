import { useEffect, useState } from "react";

export default function FridgeStats() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/fridge")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Lỗi lấy dữ liệu từ API:", err));
  }, []);

  return (
    <div className="p-4 rounded-xl shadow bg-white max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">📊 Nhiệt độ & Độ ẩm hiện tại</h2>
      {data ? (
        <div className="text-lg">
          <p>🌡️ Temperature: <strong>{data.temperature}°C</strong></p>
          <p>💧 Humidity: <strong>{data.humidity}%</strong></p>
        </div>
      ) : (
        <p>Đang tải dữ liệu...</p>
      )}
    </div>
  );
}
