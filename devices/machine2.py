import requests
import base64
import os
import cv2
import numpy as np
from datetime import datetime
import time
import threading
from skimage.metrics import structural_similarity as ssim

# Cấu hình ThingsBoard
THINGSBOARD_HOST = "app.coreiot.io"  # Thay bằng hostname của bạn
ACCESS_TOKEN = "your_access_token"  # Thay bằng access token của bạn
THINGSBOARD_URL_IMAGE = f"http://{THINGSBOARD_HOST}/api/v1/{ACCESS_TOKEN}/attributes?clientKeys=image"
HEADERS = {'Content-Type': 'application/json'}

# Thư mục lưu ảnh nhận được
SAVE_DIR = "received_images"
os.makedirs(SAVE_DIR, exist_ok=True)

# Biến toàn cục để lưu ảnh trước đó
last_image = None  
stop_event = threading.Event()  # Biến dừng thread

def compare_images(img1, img2):
    """So sánh hai ảnh bằng SSIM, trả về độ tương đồng."""
    gray1 = cv2.cvtColor(img1, cv2.COLOR_BGR2GRAY)
    gray2 = cv2.cvtColor(img2, cv2.COLOR_BGR2GRAY)
    similarity, _ = ssim(gray1, gray2, full=True)
    return similarity * 10  # Nhân 10 để đưa về thang đo 0-10

def save_image(img):
    """Lưu ảnh vào thư mục và cập nhật ảnh cuối cùng."""
    global last_image
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = os.path.join(SAVE_DIR, f"mypic.jpg")
    cv2.imwrite(filename, img)
    last_image = img  # Cập nhật ảnh mới nhất
    print(f"Ảnh đã được lưu: {filename}")

def get_image_from_thingsboard():
    """Thread thực hiện HTTP GET để lấy ảnh từ ThingsBoard."""
    global last_image

    while not stop_event.is_set():
        try:
            print("📡 Gửi yêu cầu lấy ảnh từ ThingsBoard...")
            response = requests.get(THINGSBOARD_URL_IMAGE, headers=HEADERS, timeout=10)  # Chờ tối đa 10 giây
            if response.status_code == 200:
                json_obj = response.json()

                # Kiểm tra dữ liệu nhận được có chứa ảnh không
                if "client" in json_obj and "image" in json_obj["client"]:
                    img_data = base64.b64decode(json_obj["client"]["image"])
                    np_img = np.frombuffer(img_data, dtype=np.uint8)
                    img = cv2.imdecode(np_img, cv2.IMREAD_COLOR)

                    if img is not None:
                        # # Nếu có ảnh trước đó, kiểm tra độ tương đồng
                        # if last_image is not None:
                        #     similarity_score = compare_images(last_image, img)
                        #     print(f"🔍 Độ tương đồng với ảnh trước: {similarity_score:.2f}")

                        #     if similarity_score > 8:
                        #         print("⚠️ Bỏ qua ảnh vì quá giống ảnh trước!")
                        #         continue
                        
                        # Nếu ảnh hợp lệ, lưu lại
                        save_image(img)
                    else:
                        print("Lỗi giải mã ảnh!")
                else:
                    print("Không có ảnh mới từ ThingsBoard!")

            else:
                print(f"Lỗi HTTP: {response.status_code}")

        except requests.exceptions.RequestException as e:
            print(f"Lỗi kết nối: {e}")

        print("Đang chờ cập nhật tiếp theo...")
        time.sleep(1)  # Chờ trước khi gửi yêu cầu tiếp theo

# Tạo và khởi chạy thread HTTP subscriber
http_thread = threading.Thread(target=get_image_from_thingsboard, daemon=True)
http_thread.start()

# Chương trình chính chạy song song
try:
    while True:
        print("⌛ Chương trình chính vẫn đang chạy...")
        time.sleep(5)  # Hiển thị trạng thái mỗi 10 giây

except KeyboardInterrupt:
    print("Dừng chương trình...")
    stop_event.set()  # Gửi tín hiệu dừng thread
    http_thread.join()  # Chờ thread kết thúc
    print("Đã thoát hoàn toàn.")
