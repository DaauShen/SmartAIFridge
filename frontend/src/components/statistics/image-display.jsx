import { useEffect, useState } from "react";

export default function ImageDisplay() {
  const [img, setImg] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/images")
      .then((res) => res.json())
      .then((data) => setImg(data.base64));
  }, []);

  return (
    <div>
      <h2>Ảnh mới nhất</h2>
      {img && <img src={`data:image/jpeg;base64,${img}`} alt="IoT Image" width={300} />}
    </div>
  );
}
