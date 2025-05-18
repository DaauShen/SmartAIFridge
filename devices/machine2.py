import requests
import base64
import os
import cv2
import numpy as np
from datetime import datetime
import time
import threading

# Cấu hình ThingsBoard
THINGSBOARD_HOST = "app.coreiot.io"  # Thay bằng hostname của bạn
ACCESS_TOKEN = "your_access_token"  # Thay bằng access token của bạn

# API để lấy ảnh và attributes từ ThingsBoard
THINGSBOARD_URL_IMAGE = f"http://{THINGSBOARD_HOST}/api/v1/{ACCESS_TOKEN}/attributes?clientKeys=image"
THINGSBOARD_URL_ATTRIBUTES = f"http://{THINGSBOARD_HOST}/api/v1/{ACCESS_TOKEN}/attributes?clientKeys=object_counts,temperature,humidity"

HEADERS = {'Content-Type': 'application/json'}

# Thư mục lưu ảnh nhận được
SAVE_DIR = "received_images"
os.makedirs(SAVE_DIR, exist_ok=True)

stop_event = threading.Event()  # Biến dừng thread


def save_image(img):
    """Lưu ảnh vào thư mục."""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = os.path.join(SAVE_DIR, f"mypic.jpg")
    cv2.imwrite(filename, img)
    print(f"Ảnh đã được lưu: {filename}")


def get_data_from_thingsboard():
    """Lấy dữ liệu count, temperature, humidity từ attributes của ThingsBoard."""
    while not stop_event.is_set():
        try:
            print("Đang lấy dữ liệu từ ThingsBoard...")

            # Lấy ảnh từ ThingsBoard
            response_image = requests.get(THINGSBOARD_URL_IMAGE, headers=HEADERS, timeout=10)
            response_attributes = requests.get(THINGSBOARD_URL_ATTRIBUTES, headers=HEADERS, timeout=10)

            # Xử lý ảnh
            if response_image.status_code == 200:
                json_obj = response_image.json()
                if "client" in json_obj and "image" in json_obj["client"]:
                    img_data = base64.b64decode(json_obj["client"]["image"])
                    np_img = np.frombuffer(img_data, dtype=np.uint8)
                    img = cv2.imdecode(np_img, cv2.IMREAD_COLOR)
                    if img is not None:
                        save_image(img)
                    else:
                        print("Lỗi giải mã ảnh!")

            # Lấy thông tin count, temperature, humidity từ attributes
            if response_attributes.status_code == 200:
                json_obj = response_attributes.json()

                count = json_obj.get("client", {}).get("object_counts", "N/A")
                temperature = json_obj.get("client", {}).get("temperature", "N/A")
                humidity = json_obj.get("client", {}).get("humidity", "N/A")

                print("\n#####################################")
                print(f"Count: {count} | Temp: {temperature}°C | Humidity: {humidity}%")
                print("#####################################\n")
            else:
                print(f"Lỗi lấy dữ liệu attributes: {response_attributes.status_code}")

        except requests.exceptions.RequestException as e:
            print(f"Lỗi kết nối: {e}")

        print("Đang chờ cập nhật tiếp theo...")
        time.sleep(0.5)  # Lấy dữ liệu mỗi 2 giây


# Tạo và khởi chạy thread lấy dữ liệu
http_thread = threading.Thread(target=get_data_from_thingsboard, daemon=True)
http_thread.start()

# Chương trình chính chạy song song
try:
    while True:
        print("Chương trình chính vẫn đang chạy...")
        time.sleep(1)  # Hiển thị trạng thái mỗi 5 giây

except KeyboardInterrupt:
    print("Dừng chương trình...")
    stop_event.set()  # Gửi tín hiệu dừng thread
    http_thread.join()  # Chờ thread kết thúc
    print("Đã thoát hoàn toàn.")
