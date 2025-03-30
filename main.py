import os
import subprocess

devices_folder = "devices"

for file in os.listdir(devices_folder):
    if file.endswith(".py"):  
        file_path = os.path.join(devices_folder, file)
        subprocess.Popen(["python", file_path])  # Chạy file Python