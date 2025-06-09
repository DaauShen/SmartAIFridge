from ultralytics import YOLO

def train_yolo(model_name='yolov12s.pt', data_yaml='dataset/data.yaml', epochs=50, batch=-1):
    model = YOLO(model_name)
    print(model.task)
    model.train(
        data=data_yaml,
        epochs=epochs,
        batch=batch,
        project='runs',
        name='train'
    )

    return f"runs/train/weights/best.pt"

def test_model(weights_path, source='dataset/images/val'):
    model = YOLO(weights_path)
    results = model(source, save=True)  # Lưu ảnh kết quả
    print("[INFO] Inference complete. Results saved to:", results[0].save_dir)

if __name__ == "__main__":
    best_weights = train_yolo()  # Huấn luyện mô hình
    # test_model(best_weights)  # Test mô hình sau huấn luyện
