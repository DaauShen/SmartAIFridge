import { useEffect, useState } from "react";

export default function CountCard() {
  const [counts, setCounts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/counts")
      .then((res) => res.json())
      .then((data) => setCounts(data.values));
  }, []);

  return (
    <div>
      <h2>Số lượng các loại đối tượng</h2>
      {counts ? (
        <ul>
          {Object.entries(counts).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      ) : (
        <p>Đang tải...</p>
      )}
    </div>
  );
}
