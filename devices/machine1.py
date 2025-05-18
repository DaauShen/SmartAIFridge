import requests
import cv2
import base64
import json
import os
from datetime import datetime
import time
import numpy as np
from ultralytics import YOLO  # Thư viện YOLO

# Cấu hình ThingsBoard
THINGSBOARD_HOST = "app.coreiot.io"  # Thay bằng hostname của bạn
ACCESS_TOKEN = "your_access_token"  # Thay bằng access token của bạn
THINGSBOARD_URL = f"http://{THINGSBOARD_HOST}/api/v1/{ACCESS_TOKEN}/attributes"

# Cấu hình stream từ ESP32-CAM
STREAM_URL = "http://172.20.10.5:81/stream"

# Load YOLO model
MODEL_PATH = "model/best.pt"
model = YOLO(MODEL_PATH)

# Thư mục lưu ảnh
SAVE_DIR = "received_images"
os.makedirs(SAVE_DIR, exist_ok=True)  # Tạo thư mục nếu chưa tồn tại

def get_frame_from_stream():
    """Lấy frame từ ESP32-CAM"""
    try:
        r = requests.get(STREAM_URL, stream=True, timeout=5)
        bytes_data = bytes()
        for chunk in r.iter_content(chunk_size=1024):
            bytes_data += chunk
            a = bytes_data.find(b'\xff\xd8')  # Tìm điểm bắt đầu ảnh JPEG
            b = bytes_data.find(b'\xff\xd9')  # Tìm điểm kết thúc ảnh JPEG
            if a != -1 and b != -1:
                jpg = bytes_data[a:b+2]
                bytes_data = bytes_data[b+2:]
                img = cv2.imdecode(np.frombuffer(jpg, dtype=np.uint8), cv2.IMREAD_COLOR)
                return img
    except Exception as e:
        print(f"Lỗi lấy frame: {e}")
        return None

def detect_objects(image):
    """Chạy YOLO detection và đếm số lượng đối tượng"""
    results = model(image)[0]  # Nhận diện bằng model
    object_counts = {}  # Dictionary để lưu số lượng từng loại đối tượng

    for box, conf, cls in zip(results.boxes.xyxy, results.boxes.conf, results.boxes.cls):
        x1, y1, x2, y2 = map(int, box)  # Toạ độ bounding box
        label = model.names[int(cls)]  # Lấy tên vật thể
        object_counts[label] = object_counts.get(label, 0) + 1  # Đếm số lượng

        # Vẽ bounding box
        cv2.rectangle(image, (x1, y1), (x2, y2), (0, 255, 0), 2)

        # Hiển thị label
        cv2.putText(image, f"{label} ({conf:.2f})", (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

    return image, object_counts

def save_image(image):
    """Lưu ảnh vào thư mục pub_pics với tên theo timestamp"""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"{SAVE_DIR}/detected_obj.jpg"
    cv2.imwrite(filename, image)  # Lưu ảnh
    return filename  # Trả về đường dẫn ảnh

def encode_image_to_base64(image):
    """Chuyển ảnh thành base64"""
    _, buffer = cv2.imencode('.jpg', image)
    img_base64 = base64.b64encode(buffer).decode('utf-8')
    return img_base64

def send_data_to_thingsboard(session, image_base64, object_counts):
    """Gửi ảnh và số lượng đối tượng lên ThingsBoard"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    payload = {
        "image": image_base64,
        "timestamp": timestamp,
        "object_counts": object_counts  # Gửi danh sách số lượng từng loại đối tượng
    }
    headers = {'Content-Type': 'application/json'}
    try:
        response = session.post(THINGSBOARD_URL, headers=headers, data=json.dumps(payload))
        if response.status_code == 200:
            print("Dữ liệu đã gửi lên ThingsBoard!")
        else:
            print(f"Lỗi gửi dữ liệu: {response.status_code} - {response.text}")
    except Exception as e:
        print(f"Lỗi kết nối tới ThingsBoard: {e}")

def main():
    with requests.Session() as session:
        while True:
            frame = get_frame_from_stream()
            if frame is not None:
                frame = cv2.resize(frame, (800, 600), interpolation=cv2.INTER_LINEAR)
                frame, object_counts = detect_objects(frame)  # Chạy YOLO nhận diện và đếm số lượng
                
                # Lưu ảnh vào thư mục pub_pics
                image_path = save_image(frame)
                print(f"Ảnh đã lưu tại: {image_path}")

                # Mã hóa ảnh thành base64 để gửi lên ThingsBoard
                img_base64 = encode_image_to_base64(frame)
                send_data_to_thingsboard(session, img_base64, object_counts)
            else:
                print("Không lấy được frame, thử lại...")
            time.sleep(1)  # Gửi ảnh mỗi giây

if __name__ == "__main__":
    main()
